# Axiom Modules


### Fuzzing Nuclei
```json
[{
        "command":"/home/op/go/bin/nuclei -update -silent ; cat input | /home/op/go/bin/nuclei -t _wordlist_ -o output",
        "ext":"txt",
        "wordlist":"/home/op/fuzzing-templates/"
}]
```

### FFUF Zips
```json
[{
        "command":"/home/op/go/bin/ffuf -w _wordlist_ -u _target_/FUZZ -of csv -o _output_/_cleantarget_ -ac -mr 'application/x-zip-compressed'",
        "wordlist":"/home/op/zips.txt",
        "ext":"csv",
        "threads":"1"
}]
```

### FFUF Swagger
```json
[{
        "command":"/home/op/go/bin/ffuf -w _wordlist_ -u _target_/FUZZ -of csv -o _output_/_cleantarget_ -ac -mr 'SwaggerUIBundle'",
        "wordlist":"/home/op/lists/seclists/Discovery/Web-Content/raft-large-files.txt",
        "ext":"csv",
        "threads":"1"
}]
```
