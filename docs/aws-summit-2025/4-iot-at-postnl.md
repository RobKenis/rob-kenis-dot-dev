# IoT at PostNL

Electrical vehicles are equipped with sensors to monitor battery status.
In the warehouses, roller cages are equipped with bluetooth beacons to connect those devices.
This improves logistics operations by monitoring where the roller cages are and optimize their trajectory.

## Ingestions

There's o real standard to inject the IoT data into the platform. Pull, push, MQTT, whatever, if you have
data, yeet it into the platform however you like it. When data is retrieved, it is validated and sanitized.

## IoT Platform

Some data is used in real-time, some data is stored for historical analysis.

## Challenges

A common thing in IoT is the challenge of filtering valuable data from noise. Some events are repetetive and
don't provide actual value.

If you're receiving data, you're lucky. Connectivy is the other issue, sometimes data is delayed or out of order.
You need to process all the incoming data, even if it's late.

When you're managing hundreds of thousands of devices, you need to keep those devices charged. When those devices
are in a location that is hard to reach, you need to receive the management data in real time. You need to prevent
device failures before they disrupt logistical operations.

## Stream processing

The data is processed when it is in motion, this creates insights in real-time. You know what's happening to an asset **right now**.
Roller cages periodically send their last know location, this prevents losing cages in real time. Meanwhile, the sensors
send information on their own health, like battery information. Bluetooth beacons send informations to Mobile Bluetooth
Low Energy (BLE) Gateways or Fixed BLE Gateways. Mobile Gateways push information to AWS IoT Core.

## Links

- <https://aws.amazon.com/blogs/big-data/how-postnl-processes-billions-of-iot-events-with-amazon-managed-service-for-apache-flink/>
- [Not part of this talk, but seems interesting](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/devfile-examples.html)
