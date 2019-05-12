(function(){
    var modules={
        "panel-main-sdm-ii":    			{url:"$A/components/panel/panel-main.html",router:1},
        "panel-child-sdm-ii":    			{url:"$A/components/panel/panel-child.html"},
        
        "participant-data":   		{url:"$A/components/participant/participant-data.html",Table:"sdm-ii-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child-sdm-ii",
                                            questionnaire_setup:"online-questionnaire-setup-sdm-ii",
                                            online_questionnaire:"online-questionnaire-app-sdm-ii",
                                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                        },
        "participant-form":   		{url:"$A/components/participant/participant-form.html",Table:"sdm-ii-participant"},

        "online-questionnaire-setup-sdm-ii": 	{url:"$A/modulesnline-questionnaire/components/modulesnline-questionnaire-setup.html",Table:"sdm-ii-participant"},
        "online-questionnaire-app-sdm-ii":    {url:"$A/modulesnline-questionnaire/index.html"},

        "notes":  		  	  			{url:"$A/modules/notes.html"},

        "sdm-ii-randomisation-table-data":		    {url:"$A/modules/randomisation-table-data.html",Table:"sdm-ii-randomisation-table",form_module:"sdm-ii-randomisation-table-form"},
        "sdm-ii-randomisation-table-form":		    {url:"$A/modules/randomisation-table-form.html",Table:"sdm-ii-randomisation-table"},
        "sdm-ii-g-date-data":		                {url:"$A/modules/date-data.html",Table:"sdm-ii-g-date",form_module:"sdm-ii-g-date-form"},
        "sdm-ii-g-date-form":		                {url:"$A/modules/date-form.html",Table:"sdm-ii-g-date"},
        "sdm-ii-g-anthropometry-data":		                        {url:"$A/modules/anthropometry-data.html",Table:"sdm-ii-g-anthropometry",form_module:"sdm-ii-g-anthropometry-form"},
        "sdm-ii-g-anthropometry-form":		                {url:"$A/modules/anthropometry-form.html",Table:"sdm-ii-g-anthropometry"},

        "sdm-ii-g-wtar-data":		            {url:"$A/modules/wtar-data.html",Table:"sdm-ii-g-wtar",form_module:"sdm-ii-g-wtar-form"},
        "sdm-ii-g-wtar-form":		            {url:"$A/modules/wtar-form.html",Table:"sdm-ii-g-wtar"},
        "sdm-ii-g-mmse-data":		            {url:"$A/modules/mmse-data.html",Table:"sdm-ii-g-mmse",form_module:"sdm-ii-g-mmse-form"},
        "sdm-ii-g-mmse-form":		            {url:"$A/modules/mmse-form.html",Table:"sdm-ii-g-mmse"},
        "sdm-ii-g-ethnicity-data":		            {url:"$A/modules/ethnicity-data.html",Table:"sdm-ii-g-ethnicity",form_module:"sdm-ii-g-ethnicity-form"},
        "sdm-ii-g-ethnicity-form":		            {url:"$A/modules/ethnicity-form.html",Table:"sdm-ii-g-ethnicity"},
        "sdm-ii-g-lifestyle-data":		            {url:"$A/modules/lifestyle-data.html",Table:"sdm-ii-g-lifestyle",form_module:"sdm-ii-g-lifestyle-form"},
        "sdm-ii-g-lifestyle-form":		            {url:"$A/modules/lifestyle-form.html",Table:"sdm-ii-g-lifestyle"},
        "sdm-ii-g-education-data":		            {url:"$A/modules/education-data.html",Table:"sdm-ii-g-education",form_module:"sdm-ii-g-education-form"},
        "sdm-ii-g-education-form":		            {url:"$A/modules/education-form.html",Table:"sdm-ii-b-education"},
        "sdm-ii-g-medical-history-data":		            {url:"$A/modules/medical-history-data.html",Table:"sdm-ii-g-medical-history",form_module:"sdm-ii-g-medical-history-form"},
        "sdm-ii-g-medical-history-form":		            {url:"$A/modules/medical-history-form.html",Table:"sdm-ii-b-medical-history"},

        "sdm-ii-u-snt-data":		            {url:"$A/modules/snt-data.html",Table:"sdm-ii-u-snt",form_module:"sdm-ii-u-snt-form"},
        "sdm-ii-u-snt-form":		            {url:"$A/modules/snt-form.html",Table:"sdm-ii-u-snt"},
        "sdm-ii-u-smt-data":		            {url:"$A/modules/smt-data.html",Table:"sdm-ii-u-smt",form_module:"sdm-ii-u-smt-form"},
        "sdm-ii-u-smt-form":		            {url:"$A/modules/smt-form.html",Table:"sdm-ii-u-smt"},
        "sdm-ii-u-wpte-data":		            {url:"$A/modules/wpt-data.html",Table:"sdm-ii-u-wpte",form_module:"sdm-ii-u-wpte-form"},
        "sdm-ii-u-wpte-form":		            {url:"$A/modules/wpt-form.html",Table:"sdm-ii-u-wpte"},
        "sdm-ii-u-wptm-data":		            {url:"$A/modules/wpt-data.html",Table:"sdm-ii-u-wptm",form_module:"sdm-ii-u-wptm-form"},
        "sdm-ii-u-wptm-form":		            {url:"$A/modules/wpt-form.html",Table:"sdm-ii-u-wptm"},
        "sdm-ii-u-psg300-data":		            {url:"$A/modules/psg300-data.html",Table:"sdm-ii-u-psg300",form_module:"sdm-ii-u-psg300-form"},
        "sdm-ii-u-psg300-form":		            {url:"$A/modules/psg300-form.html",Table:"sdm-ii-u-psg300"},
        "sdm-ii-u-psgedf-data":		            {url:"$A/modules/psgedf-data.html",Table:"sdm-ii-u-psgedf",form_module:"sdm-ii-u-psgedf-form"},
        "sdm-ii-u-psgedf-form":		            {url:"$A/modules/psgedf-form.html",Table:"sdm-ii-u-pre-psgedf"},

        "sdm-ii-q-psqi-data":		            {url:"$A/modules/psqi-data.html",Table:"sdm-ii-q-psqi",form_module:"sdm-ii-q-psqi-form"},
        "sdm-ii-q-psqi-form":		            {url:"$A/modules/psqi-form.html",Table:"sdm-ii-q-pre-psqi"},
        "sdm-ii-q-phq9-data":		            {url:"$A/modules/phq9-data.html",Table:"sdm-ii-q-phq9",form_module:"sdm-ii-q-phq9-form"},
        "sdm-ii-q-phq9-form":		            {url:"$A/modules/phq9-form.html",Table:"sdm-ii-q-pre-phq9"},
        "sdm-ii-q-isi-data":		            {url:"$A/modules/isi-data.html",Table:"sdm-ii-q-isi",form_module:"sdm-ii-q-isi-form"},
        "sdm-ii-q-isi-form":		            {url:"$A/modules/isi-form.html",Table:"sdm-ii-q-pre-isi"},
        "sdm-ii-q-me-data":		            {url:"$A/modules/me-data.html",Table:"sdm-ii-q-me",form_module:"sdm-ii-q-me-form"},
        "sdm-ii-q-me-form":		            {url:"$A/modules/me-form.html",Table:"sdm-ii-q-pre-me"},
        "sdm-ii-q-hads-data":		            {url:"$A/modules/hads-data.html",Table:"sdm-ii-q-hads",form_module:"sdm-ii-q-hads-form"},
        "sdm-ii-q-hads-form":		            {url:"$A/modules/hads-form.html",Table:"sdm-ii-q-pre-hads"},
        "sdm-ii-q-ess-data":		            {url:"$A/modules/ess-data.html",Table:"sdm-ii-q-ess",form_module:"sdm-ii-q-ess-form"},
        "sdm-ii-q-ess-form":		            {url:"$A/modules/ess-form.html",Table:"sdm-ii-q-pre-ess"},
        "sdm-ii-q-dass-data":		            {url:"$A/modules/dass-data.html",Table:"sdm-ii-q-dass",form_module:"sdm-ii-q-dass-form"},
        "sdm-ii-q-dass-form":		            {url:"$A/modules/dass-form.html",Table:"sdm-ii-q-pre-dass"},
        "sdm-ii-e-kss-data":		            {url:"$A/modules/kss-data.html",Table:"sdm-ii-e-kss",form_module:"sdm-ii-e-kss-form"},
        "sdm-ii-e-kss-form":		            {url:"$A/modules/kss-form.html",Table:"sdm-ii-e-pre-kss"},

        "sdm-ii-e-pvt-data":		            {url:"$A/modules/pvt-data.html",Table:"sdm-ii-e-pvt",form_module:"sdm-ii-e-pvt-form"},
        "sdm-ii-e-pvt-form":		            {url:"$A/modules/pvt-form.html",Table:"sdm-ii-e-pre-pvt"},
        "sdm-ii-e-ftt-data":		            {url:"$A/modules/neurocog/ftt-data.html",Table:"sdm-ii-e-ftt",form_module:"sdm-ii-e-ftt-form"},
        "sdm-ii-e-ftt-form":		            {url:"$A/modules/neurocog/ftt12-form.html",Table:"sdm-ii-e-pre-ftt"},

        "sdm-ii-m-kss-data":		            {url:"$A/modules/kss-data.html",Table:"sdm-ii-m-kss",form_module:"sdm-ii-m-kss-form"},
        "sdm-ii-m-kss-form":		            {url:"$A/modules/kss-form.html",Table:"sdm-ii-m-pre-kss"},

        "sdm-ii-m-pvt-data":		            {url:"$A/modules/pvt-data.html",Table:"sdm-ii-m-pvt",form_module:"sdm-ii-m-pvt-form"},
        "sdm-ii-m-pvt-form":		            {url:"$A/modules/pvt-form.html",Table:"sdm-ii-m-pre-pvt"},
        "sdm-ii-m-ftt-data":		            {url:"$A/modules/neurocog/ftt-data.html",Table:"sdm-ii-m-ftt",form_module:"sdm-ii-m-ftt-form"},
        "sdm-ii-m-ftt-form":		            {url:"$A/modules/neurocog/ftt-form.html",Table:"sdm-ii-m-pre-ftt"},

        "sdm-ii-m-word-pair-set-1":	    {url:"$A//modules/word-pairs/Set1_Morning_Wordpairs.html"},
        "sdm-ii-m-word-pair-set-2":	    {url:"$A/modules/word-pairs/Set2_morning_wordpairs"},
   }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
