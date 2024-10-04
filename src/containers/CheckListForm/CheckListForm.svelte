<script>
    import { TextInput } from "deskblocks";
    import { Text, Button } from 'deskblocks';
    import List from "../../components/List/List.svelte";
    import commonStyle from '../../common/common.module.css';
    import style from './css/CheckListForm.module.css';
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
        <Button>Edit</Button>
    </div>
    <div class={`${style.content} ${commonStyle.flexible}`}>
        <div class={`${style.actionbox} ${commonStyle.dflex} ${commonStyle.alignCenter}`}>
            <div class={commonStyle.flexible}>
                <TextInput class={style.input} placeholder="Type and press Enter to Add"/>
            </div>
            <Button>Save</Button>
            <Button variant="tertiary">Cancel</Button>
        </div>
        <List/>
    </div>
</div>