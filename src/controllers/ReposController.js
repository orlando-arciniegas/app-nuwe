import User from '../models/User';
import {getPaginate} from '../libs/getPaginate'

const ReposController = {
    paginate: async (req, res) => {
        try {
            const {size, page, name} = req.query;

            const condition = name 
            ? {
                name: { $regex: new RegExp(name), $options:"i" }
            } : {};

            const {limit, offset} = getPaginate(page, size);
            
            const listRepos = await Repo.paginate(condition, {offset, limit});
            res.json({
                total: listRepos.totalDocs,
                Repos: listRepos.docs
            })

        } catch (error){
            res.status(500).json({
               message: error.message || 'Ups algo salió mal'
            })
        }   
    },
    index: async (req, res) => {
        try {
            const listRepos = await User.find();
            res.send(listRepos)
        } catch (error){
            res.status(500).json({
               message: error.message || 'Ups algo salió mal'
            })
        }   
    },
    store: async (req, res) => {
        try {
        const newRepo = new Repo({
                role: req.body.role ? req.body.role : false,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone
            })
        const repoSave = await newRepo.save();
        res.json(repoSave)
        } catch (error) {
            if(error.message.includes('E11000')){
            res.status(500).json({
                message: "El repositorio ya existe."
            })
            }
        }
    },
    findRepo: async (req, res) => {
        const {id} = req.params;
        const repoFound = await Repo.findById(id);
        if(!repoFound)
        return res.status(404).json({
                message: `El repositorio ${id} no existe`
            })
        
        res.json(repoFound);
    },
    deleteRepo: async (req, res) => {
        const repoDelete = await Repo.findByIdAndDelete(req.params.id);
        res.json({
            message: `El repositorio fue eliminado.`
        })
    },
    filterRepo: async (req, res) => {
        const repoFilter = await Repo.find({stack: true});
        res.json(repoFilter)
    },
    updateRepo: async (req, res) => {
        const repoUpdate = await Repo.findOneAndUpdate(req.params.id, req.body);
        res.json({
            message: "Repositorio actualizado."
        })
    }
}

export default ReposController;