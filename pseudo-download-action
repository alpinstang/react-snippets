onClickDownload = ({ event, props }) => {
        let url = props.item;
        let save = document.createElement('a');
        save.visibility = "hidden";
        save.href = url;
        save.target = '_blank';
        document.body.appendChild(save);
        save.click();
        document.body.removeChild(save);
    };
