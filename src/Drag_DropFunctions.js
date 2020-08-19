imageP=document.getElementById('image1');
contentA = document.getElementById('text_editor');
htmlpanel=document.getElementById('editor');
htmlresult=document.getElementById('iframe');

imageP.onmousedown = function(event) {

    let shiftX = event.clientX - imageP.getBoundingClientRect().left;
    let shiftY = event.clientY - imageP.getBoundingClientRect().top;

    imageP.style.position = 'absolute';
    imageP.style.zIndex = 1000;
    document.body.append(imageP);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        imageP.style.left = pageX - shiftX + 'px';
        imageP.style.top = pageY - shiftY + 'px';

    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        imageP.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        imageP.hidden = false;
        if (!elemBelow){return;}
    }
    document.addEventListener('mousemove', onMouseMove);

    imageP.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        imageP.onmouseup = null;

    }
}
/****************************************|end  icon drag and drop function |**********************************/

/*************************************|text editor drag and drop function |********************************/
contentA.onmousedown = function(event) {

    let shiftX = event.clientX - contentA.getBoundingClientRect().left;
    let shiftY = event.clientY - contentA.getBoundingClientRect().top;

    contentA.style.position = 'absolute';
    contentA.style.zIndex = 1000;
    document.body.append(contentA);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        contentA.style.left = pageX - shiftX + 'px';
        contentA.style.top = pageY - shiftY + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        contentA.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        contentA.hidden = false;

    }
    document.addEventListener('mousemove', onMouseMove);

    contentA.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        contentA.onmouseup = null;
    };
};
/****************************************************textarea function**********************************************************************/


/***************************************************|html panel | ******************************************************************/

htmlpanel.onmousedown = function(event) {

    let shiftX = event.clientX - htmlpanel.getBoundingClientRect().left;
    let shiftY = event.clientY - htmlpanel.getBoundingClientRect().top;

    htmlpanel.style.position = 'absolute';
    htmlpanel.style.zIndex = 1000;
    document.body.append(htmlpanel);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        htmlpanel.style.left = pageX - shiftX + 'px';
        htmlpanel.style.top = pageY - shiftY + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        htmlpanel.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        htmlpanel.hidden = false;
        if (!elemBelow){return;}
    }
    document.addEventListener('mousemove', onMouseMove);

    htmlpanel.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        htmlpanel.onmouseup = null;
    }
}

htmlresult.onmousedown = function(event) {

    let shiftX = event.clientX - htmlresult.getBoundingClientRect().left;
    let shiftY = event.clientY - htmlresult.getBoundingClientRect().top;

    htmlresult.style.position = 'absolute';
    htmlresult.style.zIndex = 1000;
    document.body.append(htmlresult);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        htmlresult.style.left = pageX - shiftX + 'px';
        htmlresult.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        htmlresult.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        htmlresult.hidden = false;
        if (!elemBelow) {
            return;
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    htmlresult.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        htmlresult.onmouseup = null;
    }
}
/*****************************************|end of html panel |*******************************************************************/
//Non return element function [ person icon ]
imageP.ondragstart = function() {
    return false;}
// non return function [text editor ]
contentA.ondragstart=function()
{
    return false ;
}

htmlpanel.ondragstart=function ()
{
    return false ;
};

htmlresult.ondragstart=function()
{
    return false ;
}

