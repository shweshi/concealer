'use strict';Object.defineProperty(exports,'__esModule',{value:true});class Concealer{constructor(){this.conceal=(string,domain='example.org')=>{this.domain=domain;const extractedEmails=this.extractEmails(string);const concealedEmails=this.fill(extractedEmails);for(const originalEmail in concealedEmails){string=string.replace(originalEmail,concealedEmails[originalEmail]);}return string;};this.extractEmails=string=>{return string.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);};this.fill=emails=>{emails.forEach(email=>{this.add(email);});return this.dictionary;};this.add=email=>{let localPart=email.split('@')[0];while(Object.keys(this.dictionary).find(key=>this.dictionary[key]===localPart+'@'+this.domain)){localPart=this.addOrUpdateIncrement(localPart);}return this.dictionary[email]=localPart+'@'+this.domain;};this.addOrUpdateIncrement=string=>{const pattern=/-(\d+$)/;const matches=string.match(pattern);if(!matches){return string+'-1';}const increment=Number(matches[1])+1;return string.replace(pattern,'-'+increment);};this.dictionary={};this.domain='example.org';}}exports.default=Concealer;