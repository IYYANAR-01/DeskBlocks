<script>
    import { Text, Checkbox } from 'deskblocks';
    import commonStyle from '../../common/common.module.css';
    import style from './css/List.module.css';
</script>

<div class={`${style.container} ${commonStyle.dflex} ${commonStyle.alignCenter}`}>
    <div class={style.checkbox}>
        <Checkbox/>
    </div>
    <Text weight="medium">This is a ticket</Text>
</div>