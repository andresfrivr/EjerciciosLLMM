l=document.getElementsByTagName('book')[2].getElementsByTagName('author').length;
a=document.getElementsByTagName('author')
    for(i=0; i<l; i++)
        console.log(a[i].childNodes[0].nodeValue);