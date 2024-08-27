import { type SportType } from "~/data/SiteData"

export const nullArray: { [Key in SportType] : null[]} = {
  CFL:[
    null, null, null, null, null, null, null, null, null, 
  ],
  F1:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, 
  ],
  MLB:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, 
  ],
  NBA:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null,
  ],
  NFL:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
  ],
  NHL:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, null, 
  ],
  WNBA:[
    null, null, null, null, null, null, null, null, 
    null, null, null, null,
  ],
}