const Sequelize = require('sequelize');

const sequelize = require('../../configs/connection');
const Business = require('../../models/business')(sequelize, Sequelize);

Business.sync();
exports.createBusiness = (businessData) => {
    return new Promise((resolve, reject) => {
        Business.create(businessData).then(business => {
            resolve(business);
        },err=>{
            reject({error:err});
        });
    });
};
exports.findBusinessById = (id) => {
    return new Promise((resolve, reject) => {
        Business.findByPk(id).then(business => {
            if(business == null){
                reject({status:404,message:"Business not found"});
            }
            resolve(business);
        },err=>{
            reject({error:err});
        })
    });
};
exports.updateBusinessById = (businessData,id) => {
    return new Promise((resolve, reject) => {
        Business.update(businessData, {
            where: {
              id: id
            }
          }).then(business => {
            Business.findByPk(id).then(business => {
                resolve(business);
            },err1=>{
                reject({error:err1});
            })
        },err=>{
            reject({error:err});
        });
    });
};
exports.deleteBusinessById = (id) => {
    return new Promise((resolve, reject) => {
        Business.destroy({
            where: {
              id: id
            }
          }).then(() => {
            resolve({message:"Delete Successfull!!!"});
        },err=>{
            reject({error:err});
        });
    });
}; 
exports.findAllBusiness = () => {
    return new Promise((resolve, reject) => {
        Business.findAll({
            attributes: ['id','title','description']
        }).then(business => {
            resolve(business);
        },err=>{
            reject({error:err});
        })
    });
}; 