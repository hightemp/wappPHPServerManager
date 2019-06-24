 
<template>
    <b-container>
        <b-row>
            <b-col>
                <h1>PHP server manager</h1>
                <hr>
                <div class="d-flex top-anel">
                    <div class="top-panel-space-block"></div>
                    <div class="top-panel-button-block">
                        <b-button variant="success">Add server</b-button>
                    </div>
                </div>
                <b-list-group>
                    <b-list-group-item class="d-flex">
                        <div class="list-title">
                            127.0.0.1:8101 <span class="list-description">Cras justo odio</span> 
                        </div>
                        <b-button class="list-button" variant="success">Start</b-button>
                        <b-button class="list-button" variant="success">Stop</b-button>
                        <b-button class="list-button">Edit</b-button>
                        <b-button class="list-button" variant="danger">Delete</b-button>
                    </b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>
	</b-container>
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
