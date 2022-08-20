ModAPI.addAPICallback("ICore", function(api){
	Launch({
		ICore: api,
		MobEffect: Native.PotionEffect,
		Machine: api.requireGlobal("Machine"),
	});
});