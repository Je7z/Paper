const controllers = Vue.component('controllers', {
    props:['editor','handlerPallete'],
    template: `
    <div class="controllers">
        <item-bold v-bind:editor="editor"></item-bold>
        <item-italic v-bind:editor="editor"></item-italic>
        <item-code v-bind:editor="editor"></item-code>
        <item-list-ol v-bind:editor="editor"></item-list-ol>
        <item-list-ul v-bind:editor="editor"></item-list-ul>
        <item-align-left v-bind:editor="editor"></item-align-left>
        <item-align-center v-bind:editor="editor"></item-align-center>
        <item-align-right v-bind:editor="editor"></item-align-right>
        <item-palette v-bind:handlerPallete="handlerPallete"></item-palette>
    </div> `
});


const actions = Vue.component('actions', {
    template: `
    <div class="actions">
            <span id="save" ><i class="fas fa-save"></i></span>
            <span id="open"><i class="fas fa-file-alt"></i></span>
    </div> `
});

const pallete = Vue.component('pallete',{
    props:['colors','editor'],
    template: `
    <div class="pallete">
       <color-item v-bind:editor="editor" v-bind:color="color" v-for="color in colors"></color-item>
    </div>
    `
});

const colorItem = Vue.component('color-item', {
    props:['color','editor'],
    methods: {
        handlerColor: function() {
            this.editor.focus();
            document.execCommand( "foreColor", false, `${this.color}` );
        }
    },
    template: `<span v-on:click="handlerColor" v-bind:style="{backgroundColor:color}"></span>`
})

const itemBold = Vue.component('item-bold', {
    props:['editor'],
    data: function () {
        return {
            active: false
        }
    },
    methods: {
        handlerActive: function () {
            this.active = !this.active,
            this.editor.focus();
            document.execCommand('bold',false,null)
        }
    },
    template: `<span v-on:click="handlerActive" v-bind:class="{'active':active}" ><i class="fas fa-bold"></i></span>`
})
const ItemItalic = Vue.component('item-italic', {
    props:['editor'],
    data: function () {
        return {
            active: ''
        }
    },
    methods: {
        handlerActive: function () {
            this.active = !this.active
            this.editor.focus();
            document.execCommand('italic',false,null)
        }
    },
    template: `<span v-on:click="handlerActive" v-bind:class="{'active':active}"><i class="fas fa-italic"></i></span>`
})
const ItemCode = Vue.component('item-code', {
    props:['editor'],
    data: function () {
        return {
            active: ''
        }
    },
    methods: {
        handlerActive: function () {
            this.active = !this.active;
            this.editor.focus();
            document.execCommand('subscript',false,null)
        }
    },
    template: `<span v-on:click="handlerActive" v-bind:class="{'active':active}"><i class="fas fa-code"></i></span>`
})
const ItemListOl = Vue.component('item-list-ol', {
    props:['editor'],
    data: function () {
        return {
            
        }
    },
    methods: {
        handlerActive: function () {
            this.editor.focus();
            document.execCommand('insertOrderedList',false,null);
        }
    },
    template: `<span v-on:click="handlerActive" ><i class="fas fa-list-ol"></i></span>`
})
const ItemListUl = Vue.component('item-list-ul', {
    props:['editor'],
    data: function () {
        return {
           
        }
    },
    methods: {
        handlerActive: function () {

            this.editor.focus();
            document.execCommand('insertUnorderedList',false,null);
        }
    },
    template: `<span v-on:click="handlerActive"><i class="fas fa-list-ul"></i></span>`
})
const ItemAlignLeft = Vue.component('item-align-left', {
    props:['editor'],
    methods: {
        handlerActive: function () {
            this.editor.focus();
            document.execCommand('justifyLeft',false,null);
        }
    },
    template: `<span v-on:click="handlerActive"><i class="fas fa-align-left"></i></span>`
})
const ItemAlignCenter = Vue.component('item-align-center', {
    props:['editor'],
    methods: {
        handlerActive: function () {
            this.editor.focus();
            document.execCommand('justifyCenter',false,null);
        }
    },
    template: `<span v-on:click="handlerActive"><i class="fas fa-align-center"></i></span>`
})
const ItemAlignRight = Vue.component('item-align-right', {
    props:['editor'],
    methods: {
        handlerActive: function () {
            this.editor.focus();
            document.execCommand('justifyRight',false,null);
        }
    },
    template: `<span v-on:click="handlerActive"><i class="fas fa-align-right"></i></span>`
})
const ItemPalette = Vue.component('item-palette', {
    props:['pallete','handlerPallete'],
    data: function () {
        return {
            active: ''
        }
    },
    methods: {
        handlerActive: function () {
            this.active = !this.active;
            this.handlerPallete()
        }
    },
    template: `<span v-on:click="handlerActive" v-bind:class="{'active':active}" ><i class="fas fa-palette"></i></span>`
})