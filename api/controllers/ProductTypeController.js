/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getProducts: function(req, res){
		//var list = Product.find({}, skip: 0, limit: 10, sort: 'createdDate DESC');
		//res.send(list);
		var list = ProductType.find({}).exec(function(err, l){
			res.send(l);
		});
	},
	addProduct: function(req, res){
		ProductType.create(req.body).exec(function(err, r){
			res.send(r);
		});
	}
};

