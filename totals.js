function runtotaloc() 
{
    var cents = {
        "entry_1" : 1,
        "entry_3" : 5,
        "entry_5" : 10,
        "entry_7" : 25,
        "entry_9" : 100,
        "entry_11" : 200,
        "entry_13" : 500,
        "entry_15" : 1000,
        "entry_17" : 2000,
		"entry_19" : 5000,
		"entry_21" : 10000
    };
    var total = 0;
    for ( var entNum = 1; entNum <= 21; entNum += 2 )
    {
        var ecount = "entry_" + entNum;
        var eamount = "entry_" + (entNum+1);

        var count = Number(document.getElementById(ecount).value);
        var amount = count * cents[ecount];
        document.getElementById(eamount).value = (amount/100).toFixed(2);
        total += amount;
    }       
    var oc_otherq = Number(document.getElementById('entry_23').value);
    var oc_othert = Number(document.getElementById('entry_24').value);
    amount = oc_otherq * oc_othert;
    document.getElementById("entry_25").value = amount.toFixed(2);    
    total += ( 100 * amount );
    document.getElementById("entry_26").value = (total / 100).toFixed(2);

}

function runtotalcfd() 
{
    var cents = {
        "entry_28" : 1,
        "entry_30" : 5,
        "entry_32" : 10,
        "entry_34" : 25,
        "entry_36" : 100,
        "entry_38" : 200,
        "entry_40" : 500,
        "entry_42" : 1000,
        "entry_44" : 2000,
		"entry_46" : 5000,
		"entry_48" : 10000
    };
    var total = 0;
    for ( var entNum = 28; entNum <= 48; entNum += 2 )
    {
        var ecount = "entry_" + entNum;
        var eamount = "entry_" + (entNum+1);

        var count = Number(document.getElementById(ecount).value);
        var amount = count * cents[ecount];
        document.getElementById(eamount).value = (amount/100).toFixed(2);
        total += amount;
    }      
    var oc_otherq = Number(document.getElementById('entry_50').value);
    var oc_othert = Number(document.getElementById('entry_51').value);
    amount = oc_otherq * oc_othert;
    document.getElementById("entry_52").value = amount.toFixed(2);    
    total += ( 100 * amount );
    document.getElementById("entry_53").value = (total / 100).toFixed(2);
}

function runtotalcc() 
{
    var cents = {
        "entry_55" : 1,
        "entry_57" : 5,
        "entry_59" : 10,
        "entry_61" : 25,
        "entry_63" : 100,
        "entry_65" : 200,
        "entry_67" : 500,
        "entry_69" : 1000,
        "entry_71" : 2000,
		"entry_73" : 5000,
		"entry_75" : 10000
    };
    var total = 0;
    for ( var entNum = 55; entNum <= 75; entNum += 2 )
    {
        var ecount = "entry_" + entNum;
        var eamount = "entry_" + (entNum+1);

        var count = Number(document.getElementById(ecount).value);
        var amount = count * cents[ecount];
        document.getElementById(eamount).value = (amount/100).toFixed(2);
        total += amount;
    }     
    var oc_otherq = Number(document.getElementById('entry_77').value);
    var oc_othert = Number(document.getElementById('entry_78').value);
    amount = oc_otherq * oc_othert;
    document.getElementById("entry_79").value = amount.toFixed(2);    
    total += ( 100 * amount );
    document.getElementById("entry_80").value = (total / 100).toFixed(2);
	document.getElementById("entry_108").value = document.getElementById("entry_80").value;
}

function runtotalade() 
{
    var cents = {
        "entry_82" : 1,
        "entry_84" : 5,
        "entry_86" : 10,
        "entry_88" : 25,
        "entry_90" : 100,
        "entry_92" : 200,
        "entry_94" : 500,
        "entry_96" : 1000,
        "entry_98" : 2000,
		"entry_100" : 5000,
		"entry_102" : 10000
    };
    var total = 0;
    for ( var entNum = 82; entNum <= 102; entNum += 2 )
    {
        var ecount = "entry_" + entNum;
        var eamount = "entry_" + (entNum+1);

        var count = Number(document.getElementById(ecount).value);
        var amount = count * cents[ecount];
        document.getElementById(eamount).value = (amount/100).toFixed(2);
        total += amount;
    }      
    var oc_otherq = Number(document.getElementById('entry_104').value);
    var oc_othert = Number(document.getElementById('entry_105').value);
    amount = oc_otherq * oc_othert;
    document.getElementById("entry_106").value = amount.toFixed(2);    
    total += ( 100 * amount );
    document.getElementById("entry_107").value = (total / 100).toFixed(2);
	document.getElementById("entry_109").value = document.getElementById("entry_107").value;
}

      function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }
