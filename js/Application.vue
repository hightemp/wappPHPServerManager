 
<template>
    <div class="application-container container-fluid">
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                127.0.0.1:8101 Cras justo odio 
                <b-button variant="success">Start</b-button>
                <b-button variant="success">Stop</b-button>
                <b-button>Edit</b-button>
                <b-button variant="danger">Delete</b-button>
            </b-list-group-item>
        </b-list-group>
	</div>
</template>

<script>

import Vue, { VueConstructor } from 'vue'
import fs from 'fs'

var sServersListFilePath = '/etc/wappPHPServerManager/servers_list.json';

export default Vue.extend({
    name: 'Application',
    
    components: {
        
    },
    
    props: {
        
    },
    
    data: function()
    {
        return {
            aServers: []
        };
    },
  
    methods: {
        
    },
    
    created: function()
    {
        window.oApplication = this;
    },
    
    mounted: function()
    {
        if (!fs.existsSync(sServersListFilePath)) {
            fs.writeFileSync(sServersListFilePath, JSON.stringify([]));
        } else {
            this.aServers = JSON.parse(fs.readFileSync(sServersListFilePath));
        }
    }
});

</script>
