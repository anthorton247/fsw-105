var shopper = {
    name       : "Paul",
    age        : 23,
    hasCoupon  : true,
    groceryCart: [ "green beans", "cereal", "chicken breast", "mash potatoes", "milk"],
    checkout   : function() {
        return "Do you have a coupon" + this.name +"?";
    }
};
shopper.checkout()
