const pool = require('../config/database')

exports.insertPost = async (req,res)=>{
    try{
        
        let {name,description} = req.body;
        const query = "INSERT INTO post(nombre,descripcion) VALUES($1,$2) RETURNING *"
        const newPost = await pool.query(query,[name,description]);
        return res.send(newPost.rows[0]);
    }
    catch(err){
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
}

exports.getAllPost = async(req,res) =>{
    try{
        const allPost = await pool.query("SELECT * FROM post ORDER BY post_id");
        return res.json(allPost.rows);
    }
    catch(err){
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
}

exports.getPostById = async(req,res) =>{
    try{
        const {id} = req.params;
        const getPost = await pool.query("SELECT * FROM post WHERE post_id =$1",[id]);
        return res.json(getPost.rows[0]); 
    }
    catch(err){
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }

}

exports.modifyPost = async(req,res) =>{
    try{
        const {id} = req.params;
        let {name,description} = req.body;
        let query = "UPDATE post SET nombre = $1, descripcion = $2 WHERE post_id = $3;";
        const updatePost = await pool.query(query,[name,description,id]);

        return res.send('Post actualizado!');
    }
    catch(err){
        console.log(err.message);
        return res.status(500).send({ error: err.message })
    }

}

exports.deletePost = async(req,res) =>{
    try{
        const {id} = req.params;
        const deletePost = await pool.query("DELETE FROM post WHERE post_id = $1",[id]);
        return res.send('Post Eliminado!')
    }
    catch(err){
        console.log(err.message);
        return res.status(500).send({ error: err.message })
    }

}