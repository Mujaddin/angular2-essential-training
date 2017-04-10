import { OpaqueToken } from '@angular/core';

export const channelListToken = new OpaqueToken('lookupListToken');

export const channelLists = {
  charges: ['Movies', 'Series'],
  formats:['adobe_flash_player','html5']
};