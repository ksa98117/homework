
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    shapes:[],
    drawNode:null,
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

        var closeItem = new cc.MenuItemImage(
        		res.CloseNormal_png,
        		res.CloseSelected_png,
        		this.undo, this);
        closeItem.attr({
        	x: 100,
        	y: 20,
        	anchorX: 0.5,
        	anchorY: 0.5
        });

        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);
        
        this.drawNode = new cc.DrawNode();
        this.addChild(this.drawNode);
        
        var listener = cc.EventListener.create({
        	event:cc.EventListener.TOUCH_ONE_BY_ONE,
        	swallowTouches:true,
        	onTouchBegan:function(touch,event){
        		return true;
        	},
        	onTouchMoved:function(touch,event){
        		return true;
        	},
        	onTouchEnded:function(touch,event){
        		var p1 = touch.getStartLocation();
        		var p2 = touch.getLocation();
        		event.getCurrentTarget().shapes.push(p1,p2);
        		event.getCurrentTarget().drawNode.drawSegment(p1,p2,2,cc.color(100,20,20));
        		return true;
        	}
        });
        cc.eventManager.addListener(listener, this);
      
        
        
        return true;
    },
    undo: function(){
    	this.shapes.pop();
    	this.shapes.pop();
    	this.drawNode.clear();
    	for(var i = 0; i<this.shapes.length;i+=2){
    		this.drawNode.drawSegment(this.shapes[i],this.shapes[i+1],2,cc.color(100,20,20));
    	}
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
