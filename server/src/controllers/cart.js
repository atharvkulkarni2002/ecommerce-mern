const Cart = require('../models/cart');

exports.addItemToCart=(req,res)=>{

    Cart.findOne({user : req.user._id})
    .then((cart)=>{
        // return res.status(201).json({cart});

        const product=req.body.cartItems.product;
        const item=cart.cartItems.find(c=>c.product.toString()===product.toString());
        let condition, update;

        if(item){
            condition={user: req.user._id, "cartItems.product":product};
            update={
                "$set":{
                    "cartItems.$": {
                        ...req.body.cartItems,
                        quantity : item.quantity+req.body.cartItems.quantity
                    }
                }
            };
        }
        else{
            condition={user: req.user._id};
            update={
                "$push":{
                    "cartItems": req.body.cartItems
                }
            };
        } 
        Cart.findOneAndUpdate(condition,update)
        .then((cart)=>{
            return res.status(201).json({cart,item});
        }).catch((error)=>{
            return res.status(400).json({error});
        });
    }).catch((error)=>{
            if(error.length>0){
                return res.status(400).json({error});
            }
            const cart = new Cart({
                user : req.user._id,
                cartItems : [req.body.cartItems]
            });
        
            cart.save()
            .then((cart)=>{
                return res.status(201).json({cart});
            }).catch((error)=>{
                return res.status(400).json({error});
            });
            
    });

    
};