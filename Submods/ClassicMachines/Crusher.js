var Crushers = []; //Crusher array cause makes a shit ton easier
var Crusher = function(x, y, z){ //Using prototypes cause I've never really worked on them
	this.x = x;
	this.y = y;
	this.z = z;
	this.power = 0;
	this.burn_time = 200;//It is prefered to leave this as is for balance

	this.input_id = null;
	this.input_count = null;
	this.input_data = null;
	this.input_type = null;
	this.inputs_output_id = null;
	this.inputs_output_data = null;

	this.index_number = Crushers.push(this) - 1;
};

Crusher.prototype.use_item = function(item_Id, item_data){
	if(this.input_id == null && this.input_data == null){
		if(Item.isMetal(item_Id) && this.power >= 200){
			var item = Item.returnMetalInfo(item_Id);

			//Remove item from inventory... duh
			Player.addItemInventory(item_Id, -1, item_data);

			//Now modify crusher data
			this.input_id = item.rssId[0];
			this.input_count = 1;
			this.input_data = 0;
			this.input_type = "metal";
			this.inputs_output_id = item.rssId[1];
			this.inputs_output_data = 0;
		}
		else if(Item.isCrushableOre(item_Id) && this.power >= 200){
			var item = Item.returnOreInfo(item_Id);
			//Same as the first if statement

			Player.addItemInventory(item_Id, -1, item_data);

			this.input_id = item.rssId;
			this.input_count = 1;
			this.input_data = 0;
			this.input_type = "ore";
			this.inputs_output_id = item.rssId;
			this.inputs_output_data = 0;
		}
	} else {
		//Adding fuel
		if(item_Id == 263){
			//Add more powaaaaa...!
			this.power+=1600;
			//Now take the coal/charcoal away
			Player.addItemInventory(263, -1, item_data);
		}
		else if(item_Id == 325 && item_data == 10){
			//Same as other v:
			this.power+=16000;
			//Take the lava bucket and give the bucket
			Player.addItemInventory(325, -1, 10);
			Player.addItemInventory(325, 1, 0);
		}
		//Adding more of the current input
		if(this.input_id == item_Id && this.input_data == item_data && this.input_count < 64 && this.power >= 200){
			//Add another of the input
			this.input_count+=1;
			//Remove power
			this.power-=200;
			//Remove the item
			Player.addItemInventory(item_Id, -1, item_data);
		}
	}
};

Crusher.prototype.modTick = function(){
	var pointed_x = Player.getPointedBlockX();
	var pointed_y = Player.getPointedBlockY();
	var pointed_z = Player.getPointedBlockZ();
	if(pointed_x == this.x && pointed_y == this.y && pointed_z == this.z){
		//Now for a long tip message
		ModPE.showTipMessage(ChatColor.GREEN +
							 "Power: " + this.power + "/n" +
							 "Input: " + this.input_id + "(" + Item.getName(this.input_id, this.input_data, false) + ")" + "/n" +
							 "Count: " + this.input_count
							 );
	}

	//Now for the smelting
	if(this.input_id != null && this.input_data != null){
		//If there is an item in queue, countdown from 200
		this.burn_time--;
		if(this.burn_time == 0){
			//When time is 0
			if(this.input_type == 'metal'){
				//If input is a metal, drop one dust
				Level.dropItem(this.x, this.y + .25, this.z, .25, this.inputs_output_id, 1, this.inputs_output_data);
				//Remove power
				this.power-=200;
				if(this.input_count > 1){
					//If input count is more than 1, just remove one
					this.input_count-=1;
				} else {
					//Else if it IS 1, remove all data
					this.input_id = null;
					this.input_count = null;
					this.input_data = null;
					this.input_type = null;
					this.inputs_output_id = null;
					this.inputs_output_data = null;
				}
			} 
			else if(this.input_type == 'ore'){
				//Basically the same but with ores and double the dust
				Level.dropItem(this.x, this.y + .25, this.z, .25, this.inputs_output_id, 2, this.inputs_output_data);
				if(this.input_count > 1){
					this.input_count-=1;
				} else {
					this.input_id = null;
					this.input_count = null;
					this.input_data = null;
					this.input_type = null;
					this.inputs_output_id = null;
					this.inputs_output_data = null;
				}
			}
		}
	}
};

mod.metallurgy_cm.getCrusher = function(x, y, z){
	for(var i in Crushers){
		if(Crushers[i].x == x && Crushers[i].y == y && Crushers[i].z == z){
			return Crushers[i];
		}
		else {
			return;
		}
	}
};

