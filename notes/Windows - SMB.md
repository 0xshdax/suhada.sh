# Samba (SMB)
## Enumeration SMB
```
$ enum4linux -a IP
```
## Check folder Write/Read 
```
$ smbmap -H IP
$ crackmapexec smb IP -u "" up ""
$ crackmapexec smb IP -u 'Administrator' -p 'PASSWORD' --local-auth
$ crackmapexec smb IP -u administrator -H 'LMHASH:NTHASH' --local-auth
$ smbmap -H IP -d domainad.local -u user -p pass
```
## Check folder 
```
$ crackmapexec smb IP -u 'user' -p 'PASSWORD' --local-auth --shares
```
## Check Users 
```
$ crackmapexec smb IP -u 'user' -p 'PASS' --users
```
## Spray password 
```
$ crackmapexec smb 192.168.100.0/24 -u 'user' -p pass_file.txt
$ crackmapexec smb 192.168.100.0/24 -u user_file.txt -p 'password'
$ crackmapexec smb 192.168.100.0/24 -u user_file.txt -H ntlm_hashFile.txt
```
## Log in smb
```
$ smbclient //IP/foldername -U ""%""
$ smbclient //IP/foldername -U domainad.local\\user%pass
```
