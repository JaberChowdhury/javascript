ls -v *.html | cat -n |
   while read n f;
   do
      mv -vn "$f" "File$n.html"; 
   done
