const connection = require('../database/connections');

module.exports= {
    //Lista os mercados cadastrados
    async index (request, response) {
        try {
            const market = await connection('market').select('*');
            return response.status(200).json(market); 
              
        } catch (error) {
            const retorno = [{success: 0, msg: 'Ocorreu algum erro na API'}]
            return response.status(400).json(retorno);
        }
    },

    //Cria um novo mercado
    async create(request, response){
        const { cnpj, name, address, phone, city, uf, services } = request.body;
    
         await connection('market').insert({
            cnpj,
            name,
            address,
            phone,
            city,
            uf,
            services,
        })
    
        return response.json({ name });
    }
}