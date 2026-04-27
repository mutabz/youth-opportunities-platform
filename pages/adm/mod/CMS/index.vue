



<template>
<div class="container-fluid h-100">
<div class="row h-100">

<!-- LEFT PANEL -->
<div class="col-2 bg-light border-end p-3">

<h5 class="fw-bold">Elements</h5>

<div
v-for="(c,key) in components"
:key="key"
class="border rounded p-2 mb-2 bg-white element"
@click="addElement(key)"
>
{{key}}
</div>

<hr>

<button class="btn btn-success w-100 mb-2" @click="saveJSON">Save JSON</button>
<button class="btn btn-dark w-100" @click="exportHTML">Export HTML</button>

</div>


<!-- CANVAS -->
<div class="col-7 p-4 canvas">

<h5 class="fw-bold mb-3">Canvas</h5>

<div class="canvas-area">

<div
v-for="node in tree"
:key="node.id"
:class="['canvas-node',node.class, selected===node.id ? 'selected' : '']"
:style="node.style"
@click.stop="selectNode(node.id)"
>

<img v-if="node.tag==='img'" :src="node.src" class="img-fluid"/>

<input
v-else-if="node.tag==='input'"
:placeholder="node.placeholder"
class="form-control"
/>

<component
v-else
:is="node.tag"
>
{{node.text}}
</component>

</div>

</div>

</div>


<!-- RIGHT PANEL -->
<div class="col-3 border-start bg-light p-3">

<h5 class="fw-bold">Properties</h5>

<div v-if="selectedNode">

<div class="mb-3">
<label class="form-label">Text</label>
<input v-model="selectedNode.text" class="form-control">
</div>

<div class="mb-3">
<label class="form-label">Class</label>
<input v-model="selectedNode.class" class="form-control">
</div>

<div class="mb-3" v-if="selectedNode.tag==='img'">
<label>Image URL</label>
<input v-model="selectedNode.src" class="form-control">
</div>

<div class="mb-3">
<label>Text Color</label>
<input type="color" v-model="style.color" @input="applyStyle">
</div>

<div class="mb-3">
<label>Background</label>
<input type="color" v-model="style.background" @input="applyStyle">
</div>

<div class="mb-3">
<label>Padding</label>
<input type="range" min="0" max="100" v-model="style.padding" @input="applyStyle">
</div>

<div class="mb-3">
<label>Border Radius</label>
<input type="range" min="0" max="50" v-model="style.radius" @input="applyStyle">
</div>

</div>

<div v-else class="text-muted">
Select element
</div>

</div>

</div>
</div>
</template>


<script setup>
import {ref,computed} from 'vue'

let id=1

const components={
section:{tag:'section',class:'container p-4'},
heading:{tag:'h2',text:'Heading'},
paragraph:{tag:'p',text:'Paragraph'},
button:{tag:'button',text:'Button',class:'btn btn-primary'},
image:{tag:'img',src:'https://via.placeholder.com/400'},
input:{tag:'input',placeholder:'Input'}
}

const tree=ref([])

const selected=ref(null)

const style=ref({
color:'#000000',
background:'#ffffff',
padding:10,
radius:0
})


function addElement(type){

const base=components[type]

tree.value.push({
id:id++,
tag:base.tag,
text:base.text || '',
src:base.src || '',
placeholder:base.placeholder || '',
class:base.class || '',
style:''
})

}

function selectNode(i){
selected.value=i
}

const selectedNode=computed(()=>{
return tree.value.find(n=>n.id===selected.value)
})


function applyStyle(){

if(!selectedNode.value) return

selectedNode.value.style=`
color:${style.value.color};
background:${style.value.background};
padding:${style.value.padding}px;
border-radius:${style.value.radius}px;
`

}


function nodeToHTML(node){

if(node.tag==='img')
return `<img src="${node.src}" style="${node.style}">`

if(node.tag==='input')
return `<input placeholder="${node.placeholder}" style="${node.style}">`

return `<${node.tag} class="${node.class}" style="${node.style}">${node.text}</${node.tag}>`

}


function exportHTML(){

const html=tree.value.map(nodeToHTML).join('')

const blob=new Blob([html],{type:'text/html'})

const a=document.createElement('a')

a.href=URL.createObjectURL(blob)

a.download='page.html'

a.click()

}


function saveJSON(){

const blob=new Blob([JSON.stringify(tree.value,null,2)],{type:'application/json'})

const a=document.createElement('a')

a.href=URL.createObjectURL(blob)

a.download='page.json'

a.click()

}

definePageMeta({
  layout:'admin',
  middleware:'admin'
})


</script>


<style>

html,body,#__nuxt{
height:100%;
}

.canvas{
background:#f5f5f5;
}

.canvas-area{
background:white;
min-height:500px;
padding:20px;
border:1px solid #ddd;
}

.canvas-node{
margin-bottom:10px;
cursor:pointer;
}

.selected{
outline:3px solid #2563eb;
}

.element{
cursor:pointer;
}

</style>