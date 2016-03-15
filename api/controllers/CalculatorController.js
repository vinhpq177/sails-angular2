
module.exports = {
	ordertaobao: function(req, res){
		var quantity = parseInt(req.query.sl);
		var money = parseInt(req.query.tien) * quantity;
		var ship = 17500;
		var shipkg = parseInt(req.query.kg) *29000;
		var tax = money * 8 / 100;
		var rs = {all : money + tax + ship + shipkg};
		rs.per = rs.all / quantity;
		res.send(rs);
	}
}