<script lang="ts">
    import { onMount } from "svelte";
    import { Text } from 'deskblocks';
    import List from '../../components/List/List.svelte';
    import { initApp } from "../../lib/util";
    import { DB } from '../../lib/util';
    import commonStyle from '../../common/common.module.css';
    import style from './css/AgentCheckList.module.css';

    let list:{text: string, isChecked: boolean}[] = [];

    onMount(async()=>{
        await initApp();
        DB.get({ key: "checkList", queriableValue: "checkList_extension", from: 0 })
        .then((res)=>{
            let data = res["database.get"].data[0].value.name || [];
            list = [...data];
        })
        .catch((err)=>{console.log(err, '...err')});
    });

    const handleCheck = (index:number) => {
        list[index].isChecked = !(list[index].isChecked);
        list = [...list];

        DB.set({ key: "checkList", value: { name: list }, queriableValue: "checkList_extension" })
        .then((res)=>{
            console.log(res, '...res');
        })
        .catch((err)=>{console.log(err, '...err')})
    }

</script>

<div class={`${commonStyle.cover} ${commonStyle.dflex} ${commonStyle.directionColumn}`}>
    <div class={`${commonStyle.dflex} ${commonStyle.alignCenter} ${style.header}`}>
        <div class={commonStyle.flexible}>
            <Text 
                size='large'  
                weight="medium"
            >
                Check List
            </Text>
        </div>
    </div>
    <div class={`${style.content} ${commonStyle.flexible}`}>
        {#each list as data, index}
            <List
                text={data.text} 
                type="checkList" 
                id={index}
                isChecked={data.isChecked}
                handleCheck={handleCheck}
            />
        {/each}
    </div>
</div>