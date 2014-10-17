
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

        
        var drawNode = new cc.DrawNode();
        this.addChild(drawNode);
        
        var listener = cc.EventListener.create({
        	event:cc.EventListener.TOUCH_ONE_BY_ONE,
        	swallowTouches:true,
        	onTouchBegan:function(touch,event){
        		return true;
        	},
        	onTouchMoved:function(touch,event){
        		var p1 = touch.getPreviousLocation();
        		var p2 = touch.getLocation();
        		drawNode.drawSegment(p1,p2,2,cc.color(150,20,20));
        		return true;
        	}
        });
        cc.eventManager.addListener(listener, this);
      
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
