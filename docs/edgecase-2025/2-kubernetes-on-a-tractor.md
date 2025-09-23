# Kubernetes on a Tractor

> Precision farming powered by k3s, python and TensorRT at the far edge

## How to grow apples

- Apples need to be the same, perfect size
- The tree needs the right amount of blossom. To much blossom gives small apples, too little blossom gives less apples

Feeding each tree individually brings in value, this is called precision agriculture. This includes _blossom thinning_ to
force the ideal amount of blossom on a tree.

## Phase 1 - the TreeScout

Have a camera that captures a view of the trees, throw some image processing model at it to figure out the amount of blossoms
on the tree.

Send the processed data to the cloud and visualize them on a map. This data can be loaded into a sprayer, so the sprayer only
fires at trees with too much blossom.

### Challenge - where are the trees

The beta season in 2023 gathered some data, but it was not perfect. The GPS tracker did not track straight. The trees were
being detected, but not in the right place. Farmers had to wait a month from drive to insights, this is a bit of a problem
as the trees only blossom for two weeks.

### Challenge - hardware and software

Hardware and software have to be built for moving vehicles, where the shutoff mode is a powercut. Working with third-party
hardware and cameras is also fun as you have to deal with third-party hardware drivers.

## Early architecture

A single python process leveraging _multiprocessing_, built into a Docker container, ran on a single machine. Unix pipes
and watchdog kept the thing alive and enbaled inter-process communication.

### Where to go

Got with [ROS](https://www.ros.org/) or [k3s](https://k3s.io/). With ROS, you have to learn C++ and embedded software, with
k3s you can keep using your Python stack, so they went with k3s.

## Current architecture

Run k3s on a single node, run python containers on top and use RabbitMQ for inter-process communication. The next year, the
results were already more successful. The drives with results went from 6 to 85 and the time to insights went down from
30 days to 1 hour.

### Not everything goes to plan

Sometimes the customer mounts the cameras upside down and your model freaks out. Tree roots are supposed to be on the bottom.

## Lessons learned

- Play to the teams strenght: if your team knows Python, dont change everything to C++
- Python concurrency has its limits. You cannot horizontally scale without also ramping up cpu and memory usage.
- Nvidia: CUDA on the cloud is bad, CUDA on the edge is worse.
- Using a Dutch sim card in Germany has weird results with handing out IP addresses.
- Keep it simple: Kubernetes and Helm is a good combo to start.

## Links

- <https://aureaimaging.com/>
- <https://developer.nvidia.com/tensorrt>
- <https://geopandas.org/en/stable/getting_started/introduction.html>
- <https://kairos.io/>
- <https://open-cluster-management.io/>
