<script>
    import { Text, Checkbox, IconButton, Icon, tooltip } from 'deskblocks';
	import { IconEdit, IconDelete } from 'deskblocks/icons';
    import commonStyle from '../../common/common.module.css';
    import style from './css/List.module.css';

    export let id;
    export let type = 'list';
    export let text = 'text';
    export let isChecked = false;
    export let handleEdit;
    export let handleDelete;
    export let handleCheck;

    const onEdit = () => {
        handleEdit && handleEdit(id);
    }
    const onDelete = () => {
        handleDelete && handleDelete(id);
    }
    const onCheck = () => {
        handleCheck && handleCheck(id);
    }
</script>

<div class={`${style.container} ${commonStyle.dflex} ${commonStyle.alignCenter}`}>
    {#if type === 'checkList'}
        <Checkbox bind:checked={isChecked} on:change={onCheck}/>
    {/if}
    <div class={commonStyle.flexible}>
        <Text 
            weight="medium" 
            tag="p"
            class={style.text}
        >
            {text}
        </Text>
    </div>
    {#if type === "list"}
        <button on:click={onEdit} class={style.actionBtn}>
            <IconButton variant="ghost">
                <Icon icon={IconEdit}/>
            </IconButton>
        </button>
        <button on:click={onDelete} class={style.actionBtn}>
            <IconButton variant="danger-secondary">
                <Icon icon={IconDelete}/>
            </IconButton>
        </button>
    {/if}
</div>