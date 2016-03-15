/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id: {
  		primaryKey: true,
  		type: 'integer',
  		autoIncrement: true
  	},
  	code: 'string',
  	name: 'string',
  	createdDate: {
  		type: 'date',
  		defaultTo: new Date()
  	},
  	des: 'string',
  	price: 'integer',
  	productType: {
  		model: 'ProductType'
  	},
  	productSizes: {
  		collection: 'ProductSize',
  		via: 'product'
  	}
  }

};

