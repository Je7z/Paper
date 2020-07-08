const template = `
<div id="paper" class="paper">
        <div id="header" class="header">
            <controllers v-bind:handlerPallete="handlerPallete"  v-bind:editor="editor"></controllers>
            <actions></actions>
        </div>
        <pallete v-show="pallete" v-bind:editor="editor" v-bind:colors="colors"></pallete>
        <div id="editor" spellcheck=false ref="editor" onblur="onDivBlur();" onmousedown="return cancelEvent(event);" onclick="return cancelEvent(event);" contentEditable="true" onmouseup="saveSelection();" onkeyup="saveSelection();" onfocus="restoreSelection();" contenteditable="true" class="editor"></div>
</div> `


const editor = new Vue({
    el: "#app",
    data: {
        editor:'',
        colors:['#DCDFE4','#E06C75','#98C379','#E5C07B','#61AFEF','#C678DD','#56B6C2'],
        pallete:false,
    },
    mounted: function () {
        this.$refs.editor.focus();
        this.editor = this.$refs.editor
    },
    methods: {
        handlerPallete: function(data) {
            this.pallete = !this.pallete
        }
    },
    template,
});

