<script lang="ts">
    import { onMount } from "svelte";
    import { initApp } from "../../lib/util";
    import { TextInput } from "deskblocks";
    import { Text, Button } from 'deskblocks';
    import List from "../../components/List/List.svelte";
    import { DB } from '../../lib/util';
    import commonStyle from '../../common/common.module.css';
    import style from './css/CheckListForm.module.css';

    let list:{text: string, isChecked: boolean}[] = [];
    let value:string = '';
    let curEditableIndex:any = null;
    let isEditable:boolean = true;

    const toggleEdit = (data:boolean) => {
        isEditable = data;
    }

    const handleEnter = (e:any) => {
        value = value.trim();
        if(e.key === "Enter" && value !== '') {
            if(curEditableIndex !== null) {
                list[curEditableIndex].text = value;
                curEditableIndex = null;
            } else {
                list = [{text: value, isChecked: false}, ...list];
            }
            value = '';
        }
    }

    let handleEdit = (index:number) => {
        curEditableIndex = index;
        value = list[index].text;
        toggleEdit(true);
    }

    const handleDelete = (index:number) => {
        list.splice(index, 1);
        list = [...list];
        toggleEdit(true);
    }

    const onSave = () => {
        DB.set({ key: "checkList", value: { name: list }, queriableValue: "checkList_extension" })
        .then((res)=>{
            console.log(res, '...res');
            isEditable = false;
        })
        .catch((err)=>{console.log(err, '...err')})
    }

    onMount(async()=>{
        await initApp();
        DB.get({ key: "checkList", queriableValue: "checkList_extension", from: 0 })
        .then((res)=>{
            let data = res["database.get"].data[0].value.name || [];
            list = [...data];
        })
        .catch((err)=>{console.log(err, '...err')});
    });

</script>

<div class={`${commonStyle.cover} ${commonStyle.dflex} ${commonStyle.directionColumn}`}>
    <div class={`${commonStyle.dflex} ${commonStyle.alignCenter} ${style.header}`}>
        <div class={commonStyle.flexible}>
            <Text 
                size='large'  
                weight="medium"
            >
                Create your checklist
            </Text>
        </div>
        {#if !isEditable}
            <Button on:click={()=>toggleEdit(true)}>Add</Button>
        {/if}
    </div>
    <div class={`${style.content} ${commonStyle.flexible}`}>
        {#if isEditable}
            <div class={`${style.actionbox} ${commonStyle.dflex} ${commonStyle.alignCenter}`}>
                <div class={commonStyle.flexible}>
                    <TextInput 
                        class={style.input} 
                        placeholder="Type and press Enter to Add" 
                        on:keyup={handleEnter}
                        bind:value={value}
                    />
                </div>
                <Button on:click={onSave}>Save</Button>
                <Button variant="tertiary" on:click={()=>toggleEdit(false)}>Cancel</Button>
            </div>
        {/if}
        {#each list as data, index}
            <List 
                text={data.text} 
                type="list" 
                id={index}
                {handleEdit} 
                {handleDelete}
            />
        {/each}
    </div>
</div>