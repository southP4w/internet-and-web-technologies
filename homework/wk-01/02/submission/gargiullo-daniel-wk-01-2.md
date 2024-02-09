### 1. Go to Command Prompt (type cmd) and ping three different places outside the United States. Copy and paste the results to a document and explain the discrepancy in times.

#### Germany (78.46.223.24):

```
Pinging 78.46.223.24 with 32 bytes of data:
Reply from 78.46.223.24: bytes=32 time=90ms TTL=50
Reply from 78.46.223.24: bytes=32 time=92ms TTL=50
Reply from 78.46.223.24: bytes=32 time=91ms TTL=50
Reply from 78.46.223.24: bytes=32 time=91ms TTL=50

Ping statistics for 78.46.223.24:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 90ms, Maximum = 92ms, Average = 91ms
```

#### Japan (153.126.145.118):

```
Pinging 153.126.145.118 with 32 bytes of data:
Reply from 153.126.145.118: bytes=32 time=190ms TTL=47
Reply from 153.126.145.118: bytes=32 time=189ms TTL=47
Reply from 153.126.145.118: bytes=32 time=190ms TTL=47
Reply from 153.126.145.118: bytes=32 time=189ms TTL=47

Ping statistics for 153.126.145.118:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 189ms, Maximum = 190ms, Average = 189ms
```

#### Australia (103.224.182.250):

```
Pinging 103.224.182.250 with 32 bytes of data:
Reply from 103.224.182.250: bytes=32 time=73ms TTL=53
Reply from 103.224.182.250: bytes=32 time=72ms TTL=53
Reply from 103.224.182.250: bytes=32 time=74ms TTL=53
Reply from 103.224.182.250: bytes=32 time=73ms TTL=53

Ping statistics for 103.224.182.250:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 72ms, Maximum = 74ms, Average = 73ms
```

- The time it took to ping Japan was at least double that of Australia or Germany. None of the three pings experienced any packet loss.

### 2. Why would a ping not work? Why is a ping an important network tool?

- A ping may not work if the network being pinged is down, or experiencing major delays. Firewall and/or other security settings can also play a role in whether or not a ping will return a response.
- Pinging is a crucial networking tool because it can be used to very quickly and easily determine whether or not a connection can be established between two networks or devices. It is also extremely useful in network path tracking, measuring connection speeds, and just general network troubleshooting.

### 3. Use the tracert command on the three above websites (and record your results). Explain the path of the hops.

#### Germany (`tracert -w 3 -h 16 -d 78.46.223.24`):

```
Tracing route to 78.46.223.24 over a maximum of 16 hops

  1     *        *        *     Request timed out.
  2    13 ms    10 ms    12 ms  x.xx.xxx.x
  3     9 ms    16 ms    15 ms  xxx.xxx.xx.xxx
  4     9 ms     8 ms     9 ms  xx.xxx.xx.xxx
  5    10 ms     8 ms     9 ms  xxx.xx.xxx.xxx
  6    90 ms    89 ms    88 ms  xxx.xxx.xxx.xx
  7   139 ms     *       88 ms  xxx.xx.xx.xxx
  8    91 ms    91 ms    89 ms  xxx.xxx.xxx.xxx
  9    90 ms    91 ms   118 ms  xxx.xxx.xxx.xxx
 10    93 ms     *       92 ms  xxx.xxx.xxx.xxx
 11     *        *        *     Request timed out.
 12    91 ms    92 ms    91 ms  xxx.xxx.xxx.xx
 13    92 ms    91 ms    90 ms  78.46.223.24

Trace complete.
```

#### Japan (`tracert -w 3 -h 20 -d 153.126.145.118`):

```
Tracing route to 153.126.145.118 over a maximum of 20 hops

  1     *        *        *     Request timed out.
  2    15 ms    11 ms     7 ms  x.xx.xxx.x
  3    10 ms    15 ms    16 ms  xxx.xxx.xx.xxx
  4     8 ms     8 ms    18 ms  xx.xxx.xx.xxx
  5    10 ms    11 ms     9 ms  x.xx.xx.xx
  6     *        *        *     Request timed out.
  7    73 ms    72 ms    75 ms  x.x.xx.xx
  8    72 ms    72 ms    73 ms  xxx.xx.x.xxx
  9   176 ms   176 ms   178 ms  xxx.xxx.xx.xx
 10   178 ms     *      177 ms  xx.xx.xxx.xxx
 11   172 ms   175 ms     *     xx.xx.xx.xx
 12   171 ms   187 ms     *     xxx.xxx.xx.xx
 13     *        *        *     Request timed out.
 14     *        *        *     Request timed out.
 15     *        *        *     Request timed out.
 16     *        *        *     Request timed out.
 17     *        *        *     Request timed out.
 18     *        *        *     Request timed out.
 19   190 ms   191 ms     *     153.126.145.118
 20   190 ms   188 ms     *     153.126.145.118

Trace complete.
```

#### Australia (`tracert -w 3 -h 16 -d 103.224.182.250`):

```
Tracing route to 103.224.182.250 over a maximum of 16 hops

  1     *        *        *     Request timed out.
  2    10 ms     7 ms     9 ms  x.xx.xxx.x
  3     8 ms     9 ms    15 ms  xxx.xxx.xx.xxx
  4     7 ms     9 ms     9 ms  xx.xxx.xx.xxx
  5    13 ms    28 ms    19 ms  xxx.xx.xxx.xxx
  6     9 ms     9 ms     9 ms  xx.xxx.xx.xx
  7     *        *        *     Request timed out.
  8     *        *       71 ms  xx.xxx.xx.xxx
  9     *        *        *     Request timed out.
 10     *        *        *     Request timed out.
 11     *       76 ms    68 ms  xx.xxx.xx.xxx
 12    70 ms    72 ms    71 ms  xx.xxx.xx.xxx
 13    72 ms    73 ms    72 ms  xxx.xxx.xxx.xx
 14    72 ms     *        *     xxx.xxx.xxx.xxx
 15    71 ms    73 ms    73 ms  103.224.182.250

Trace complete.
```

- `tracert` essentially shows possible paths that the packets being transported over an IP Network can take, as well as measuring delays over those networks. The times of the hops are summed to get the total time spent to establish the connection. `tracert` terminates when the connection is either established, or when all sent packets are lost more than twice (in which case the route and timing cannot be evaluated), whichever comes first.

### 4. Discuss the concept and three different benefits to Layered Security (bullet points is fine):

- Redundancy: Layered Security provides redundancy in the protection mechanisms. If one layer fails, another layer is ready to intercept or mitigate the threat, ensuring that the system is not compromised by a single point of failure.

- Increased Attack Detection: With multiple layers of security, there are more opportunities to detect malicious activities. Each layer can be equipped with its own detection mechanisms, increasing the chances of identifying and stopping an attack at various stages of its execution.

- Deterrence to Attackers: The complexity and time required to breach multiple layers of defense can deter attackers. Knowing that they have to bypass not just one, but several layers of security measures, can discourage potential attackers or lead them to target more vulnerable systems instead.

### 5. Why is the Principle of Least Privilege so important?

- POLP is important because it enforces a restriction that only allows a party or entity (be it a user's account for a bank, an object in some source code, an employee at a business, etc.) to access what it needs to perform its functions, and nothing more. This is extremely important for obvious reasons. For example, it would make no sense to have an Administrator account type and a User account type that both have full administrative privileges.
