
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
      
        this._super();
        var BC=new cc.Sprite("res/blue.jpg");

        BC.scale=0.5;
        this.addChild(BC);
        BC.x=this.width/2;
        BC.y=this.height / 2;
       
       //
        var helloLabel = cc.LabelTTF("Hello World");
        helloLabel.x = this.width/2;
        helloLabel.y = 100;
        this.addChild(helloLabel);
        return true;
//      
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
