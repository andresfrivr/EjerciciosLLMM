l=document.getElementsByTagName('title').length;
a=document.getElementsByTagName('title');
    for(i=0; i<l; i++)
        console.log(a[i].childNodes[0].nodeValue);