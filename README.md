# node-red-contrib-cot2xtopo
Parses CoT message from a stream, parses for PLI messages for coordinates and callsign, and then sends a location to CalTopo using the API and connect key generated by team accounts

<img src="docs/tak-pli-to-caltopo flow diagram.png" width="800"/>
<img src="docs/topo-pli-to-tak flow diagram.png" width="800"/>

## SUMMARY

This Node RED subflow listens in on a network kml file such as the one produced by a CalTopo Team account map, parses out the position location information (PLI) of personnel and streams the cursor on target message to a TAK Server or multicasts to via UDP on a virtual private network. 

### Pre-Requisites
1. Node RED installed and continuously running (See Greg Albrecht's [video](https://youtu.be/1mHphHhX4lk) on how to install Node-Red on Windows)
2. CalTopo Team account with a Map ID and the map's Base Permission set to *URL*
3. node-red-contrib-tak node

### If using a TAK Server (Optional)
2. An open port on your TAK Server using an `x509` authorization if you plan to use tls (most secure)
3. A certificates generated by the TAK Server and the TCP node ([See Greg Albrect's video](https://youtu.be/5i-y3Nc01Hs)) or [here]([https://node-red-contrib-tak.readthedocs.io/en/latest/](https://node-red-contrib-tak.readthedocs.io/en/latest/tls/))

## LIMITATIONS
If your team creates new maps for every call, you will need to manually inject the new Map_ID using the `Inject` node in Node RED or create a User Interface Text node.  Your other option is to dedicate a specific CalTopo map for live-tracking or SMS Locators.

The function node has some filtering to assign a color for a terms found in the callsign.  Edit those, needed.

## CONTACT INFORMATION
If using an SMS Locator in CalTopo and if you provide a callsign titled subject[digit] [10-digit telephone number] `(e.g. subject1 1118675309)`, the telephone number will be parsed and available in the TAK's Contact menu in ATAK / iTAK to allow you to call or text the subject by tapping the PLI in ATAK / iTAK.  Using `subject` in the name will give the PLI a Magenta color / team.

> **NOTE**Use this with caution, as if the subject is not actively updating their browser, their position will stale out due to mobile os security settings.  SMS Locators should be treated as Last Known Positions.

## REQUIRED NODES
1. **INJECT:**  The msg.payload should be set to the CalTopo Map ID, which would be the last 5 characters of your CalTopo URL.  For example, if your map url is https://sartopo.com/m/ABC12, the map id would be `ABC12`.
2. **node-red-contrib-tak:**  This node is required to pass the CoT message from this subflow to a TAK Server or EUDs on a network. 
3. **TCP OUT:** 
   - **TAK Server:** If using TLS, check on the SSL / TLS option and create or edit your TLS Configuration, as needed.
   - **UDP:** This would need to be configured to your vpn settings and requires your Node Red instance to be on the same vpn to multicast to TAK end-user-devices.

For more information on how to set up the network and [node-red-contrib-tak](https://node-red-contrib-tak.readthedocs.io/en/latest/) nodes, see https://node-red-contrib-tak.readthedocs.io/en/latest/

For more information on configuring your [CalTopo](https://caltopo.com) team account, visit their [support](https://training.caltopo.com/all_users/team-accounts) page 

## INSTALLATION:
1. Import subflow json files in the `./examples` subfolder into to Node-RED
2. Install using `npm`:  `npm i node-red-contrib-cot2xtopo`

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/F8wrYstBHy)

## License & Copyright

Copyright 2023 CLP Development, LLC

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
