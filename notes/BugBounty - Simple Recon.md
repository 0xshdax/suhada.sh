# Simple Reconnaissance

* https://github.com/projectdiscovery/subfinder
* https://github.com/projectdiscovery/dnsx
* https://github.com/projectdiscovery/naabu
* https://github.com/dwisiswant0/cf-check

```
$ subfinder -dL target.txt -o target-subs.txt
```

```
$ cat target-subs.txt | dnsx -a -ro -silent | cf-check -d | naabu -silent  -top-ports 1000 -exclude-ports 80,443,21,22,25 -o ports.txt
```
