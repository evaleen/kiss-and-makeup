'use es6';

const Colours = {
  BLUSH: [
    '#ad5063', '#f5989d', '#c98077', '#d47476', '#f27186', '#f58f83', '#9D6542', '#6e3b18', '#b06037', '#e38069', '#f7e2d4',
    '#ad444a', '#d55c67', '#c25159', '#ecbaba', '#ee9cb1', '#ecc3d5', '#7c3545', '#a76b4f', '#e2707a', '#bf3938', '#cc7c7d',
    '#D46472', '#F3A0A8', '#D88798', '#BC6E7E', '#F2869D', '#F26F81', '#CA7769', '#EC6A4E', '#F18F8E', '#D4696F', '#E4878D',
    '#DC6C68', '#E95E49', '#C32F3D', '#E1506F', '#E7807F', '#FFA8AC', '#E4958E', '#C88481', '#BC7070', '#EC8389', '#C7797B',
    '#EE8581', '#E88C90', '#F591A6', '#E99DAA', '#E6AC96', '#FB9485', '#DC7861', '#B9746F', '#FA5B48', '#F9283D', '#ED94A0',
    '#CD2254', '#EC70A6', '#E17A71', '#EEA99F', '#E2918C', '#EC8079', '#F2A5B2', '#F4587A', '#D06079', '#FF818D', '#e07b78',
    '#f39f94', '#e06989', '#c14c38', '#ee7f66', '#f47892', '#b9484a', '#d88a66', '#FF93A0', '#E89890', '#FC9D8F', '#FFAAAF',
    '#C94A50', '#F27988', '#FB8684', '#AC564D', '#A25156', '#9B593E', '#faaab5', '#e19792', '#f69476', '#8b2d46', '#b5665f',
    '#E9B899', '#F390AC', '#EB9A96', '#A57762', '#FE836C', '#F6A083', '#D3766C', '#F27A82', '#E54775', '#F66341', '#F0404E',
    '#C58A68', '#D27267', '#C9888C', '#DB92A6', '#D68D98', '#D999AA', '#C97E79', '#E8A78B', '#FFAE83', '#942b38', '#f33fa8',
    '#ff5d66', '#fa7971', '#d37a6a', '#d6887f', '#e59395',
  ],
  BLUSH_POWDER: [
    '#ad5063', '#f5989d', '#c98077', '#d47476', '#f27186', '#f58f83', '#9D6542', '#6e3b18', '#b06037', '#e38069', '#ad444a',
    '#d55c67', '#E4958E', '#C88481', '#BC7070', '#EC8389', '#C7797B', '#EE8581', '#E88C90', '#F591A6', '#E99DAA', '#E6AC96',
    '#FB9485', '#DC7861', '#B9746F', '#FA5B48', '#F9283D', '#ED94A0', '#CD2254', '#EC70A6', '#E17A71', '#EEA99F', '#E2918C',
    '#EC8079', '#F2A5B2', '#F4587A', '#D06079', '#FF818D', '#e07b78', '#f39f94', '#e06989', '#c14c38', '#ee7f66', '#f47892',
    '#b9484a', '#d88a66', '#FF93A0', '#E89890', '#FC9D8F', '#FFAAAF', '#C94A50', '#F27988', '#FB8684', '#AC564D', '#A25156',
    '#9B593E', '#faaab5', '#e19792', '#f69476', '#8b2d46', '#b5665f', '#E9B899', '#F390AC', '#EB9A96', '#A57762', '#FE836C',
    '#F6A083', '#D3766C', '#F27A82', '#E54775', '#F66341', '#F0404E', '#C58A68', '#D27267', '#C9888C', '#DB92A6', '#D68D98',
    '#D999AA', '#C97E79', '#E8A78B', '#FFAE83'
  ],
  BLUSH_CREAM: [
    '#c25159', '#ecbaba', '#ee9cb1', '#ecc3d5', '#7c3545', '#a76b4f', '#e2707a', '#bf3938', '#cc7c7d', '#D46472', '#F3A0A8',
    '#D88798', '#BC6E7E', '#F2869D', '#F26F81', '#CA7769', '#EC6A4E', '#F18F8E', '#D4696F', '#E4878D', '#DC6C68', '#E95E49',
    '#C32F3D', '#E1506F', '#E7807F', '#FFA8AC',
  ],
  BRONZER: [
    '#B57F5B', '#B48A60', '#E5A78E', '#F3A5A3', '#EB9E84', '#FFFFFF', '#AA644B', '#e0a576', '#CF9978',
    '#AF816A', '#CFA17F', '#B98963', '#B77C59', '#a8765a', '#be8667',
  ],
  EYEBROW: [
    '#95816e', '#806453', '#4e392b', '#392f27', '#504b49', '#967765', '#ab8d7c', '#5c4743', '#cda885', '#64483c', '#897666',
    '#7f6452', '#4d372a', '#3a3027', '#7b6859', '#b09983', '#a08572', '#8b6654', '#674d3b', '#443227', '#9d7449', '#8d5f3f',
  ],
  EYELINER_LIQUID: [
    '#000000', '#452810', '#6b3420', '#185c3f', '#083b7d', '#5f3687', '#0a070c', '#7f787b', '#8f8377', '#b38e87', '#dae5e7',
    '#aea2bb', '#e8c2b1', '#fdd3c8', '#fcd1b8', '#475157', '#54443f', '#181718', '#C1CD85', '#4A484B', '#60423B', '#5B392D',
    '#06090A', '#0B0C08', '#40272B', '#332A30', '#46352D', '#030005', '#FFFFFF', '#014E48', '#0F2D66', '#404040', '#075E96',
    '#3C0F02', '#4E3D36', '#4E2F2F', '#6C446C', '#55020F', '#210007', '#74482f', '#513E38', '#442a59', '#488e76', '#495535',
    '#2b3b5f', '#633832', '#756446', '#63453b', '#2d6961', '#000006', '#7C4C30', '#1C1B1A', '#A0ABAF', '#CDA57F', '#9B78A2',
    '#322A27', '#259B88', '#E3DFE0', '#31241B', '#1C1B19', '#423445', '#27334d', '#403227', '#36312d', '#5B4539', '#1B1815',
    '#614099', '#086BCD', '#FFE07D', '#B0182C', '#C6D17A', '#059953', '#FE8B2A', '#FE99C3', '#B58ABF', '#565658', '#3f2b20',
    '#ecbca2', '#6b3b29', '#1f6456', '#464140', '#1c1e3e', '#523945', '#361712', '#161514', '#8792a2', '#ab638d', '#603067',
    '#2d3b5b', '#48432f', '#3c3540', '#3a201f',
  ],
  EYELINER_PENCIL: [
    '#474747', '#4E3801', '#000009', '#131313', '#151515', '#35120C', '#583939', '#283434', '#000000', '#5a5b60', '#5f769c',
    '#386e6e', '#574c7c', '#00849d', '#837163', '#854f58', '#008687', '#56403a', '#2e4064', '#322423', '#1B1B1B', '#FFFFFF',
    '#412828', '#221E1F', '#797B7D', '#736364', '#5E4643', '#403D69', '#79361d', '#5F6A6E', '#34383B', '#072A4A', '#252A30',
    '#ECBE9C', '#F1D5A6', '#EDE9E6', '#DEDAD7', '#9E826A', '#795D52', '#264174', '#714C8D', '#472E2A', '#676767', '#2B564C',
    '#0F91BC', '#271411', '#4F4B4C', '#6A3523', '#411F16', '#376284', '#2F2725', '#0F0F0F', '#008A8D', '#2F939E', '#7F4195',
    '#242A5F', '#D99A85', '#2A61AC', '#3C393A', '#3e3731', '#163516', '#64b3eb', '#34815d', '#43b1a6', '#719442', '#6a73c2',
    '#8653dc', '#23132d', '#363636', '#3f4752', '#37302a', '#2d2824', '#0e0e0e', '#807e7f', '#a57756', '#623272', '#2c4236',
    '#352a6e', '#001d63', '#54473f', '#563734', '#151219', '#48445C', '#146849', '#3F4B97', '#5B7E84', '#BEAC9E', '#53484C',
    '#312414', '#4E5768', '#572e12', '#66603c', '#0049D3', '#EBEBEB', '#CAB22A', '#472A24', '#04B1DC', '#272830', '#202446',
    '#896652', '#5C6085', '#F9F2EA', '#5D5855', '#AB9A63', '#9E9E9E', '#065D78', '#8A6433',
  ],
  EYESHADOW: [
    '#6b5a73', '#7c735b', '#b27866', '#543227', '#9a6758', '#a05d42', '#99978d', '#de9d7c', '#874d25', '#dbbdb4', '#6e4e40',
    '#e8e7e3', '#bc8473', '#ffd9ac', '#1D252D', '#3F2A56', '#003865', '#00594F', '#C88242', '#F1C6A7', '#f2caad', '#c5c7c8',
    '#fdd3d2', '#E5A2B8', '#986958', '#085559', '#A8A9A4', '#027F9C', '#E9E9E9', '#C9AECD', '#221E17', '#7D4B2E', '#04ABC6',
    '#3B3331', '#E9EAE5', '#1D1D1D', '#F9DDCB', '#BAB4B6', '#C89987', '#6f9087', '#9D837E', '#2f2a27', '#EFB49E', '#CEB2A0',
    '#8A9C86', '#FBCFB2', '#A6777A', '#e38597', '#A06C69', '#fcdda6', '#ac9689', '#9786b0', '#ecc2c6', '#CC9B7B', '#8CA7B5',
    '#533C5D', '#BC977C', '#E3AF50', '#159191', '#542D7E', '#81726d', '#d3cfcc', '#1d8493', '#ab897d', '#D9C4AC', '#E6E5E1',
    '#69577F', '#EBC8B4', '#274A65', '#656D78', '#C24152', '#A5A1A2', '#377A3C', '#4E3E3E', '#6D8B93', '#702A1A', '#865945',
    '#D7AE7A', '#373030', '#B196A6', '#484A4E', '#98907A', '#BD9786', '#8A665B', '#564728', '#141936', '#E65371', '#FEFDF9',
    '#6A4481', '#F7D43A', '#F4B6A7', '#B99D87', '#D9C2B4', '#F17B95', '#D8B69B', '#E47F47', '#EBC09E', '#AA5048', '#8A6741',
    '#5E3C4D', '#845685', '#A6887E', '#F97169', '#83795B', '#997E8D', '#A68B7D', '#E5AEB9', '#957B83', '#7D6F7D', '#8E8C86',
    '#DDBA89', '#5C3B27', '#706A70', '#B89A89', '#D8BFAC', '#515552', '#AB9695', '#A1B4C5', '#BBAF9F', '#FBCAAA', '#B8A3C2',
    '#F9E6D7', '#F7DBB6', '#F8C4AA', '#F8DEEB', '#ad95a5', '#d6c4ac', '#9a6c5f', '#daaaa0', '#2e2e2e', '#4d302f', '#6d584e',
    '#987164', '#a77d5d', '#b68369', '#b18f7d', '#d1a084', '#ecccaf', '#f1d1c5',
  ],
  FOUNDATION: [
    '#b17c60', '#9e6d4e', '#e2b49d', '#e9c9b4', '#d4a47f', '#f8e2cc', '#e9c09f', '#f3d6c7', '#cf743b', '#dc8e5a', '#fbb171',
    '#f9be8a', '#ecba97', '#f4d4bb', '#f9d9be', '#f1d3b5', '#f4dac4', '#7C4B2D', '#965831', '#C77E4D', '#DD925F', '#ECAD79',
    '#F2B791', '#784311', '#9c6018', '#a0672e', '#cea176', '#e9b88b', '#8f5628', '#c47b4d', '#64300a', '#793f0d', '#9e6209',
    '#ac703d', '#e5ae86', '#b37750', '#bc855f', '#d9a37f', '#dfa585', '#dead87', '#e2ae8e', '#e5b495', '#e6ba9f', '#e8b89b',
    '#f1c7b1', '#fadbc7', '#CE9E88', '#FBD8AA', '#FFD9A6', '#CB9E6C', '#FFD59E', '#D89A75', '#E3B08F', '#E3B591', '#E5C5A3',
    '#E3C7AA', '#C38961', '#DFBDA2', '#dcab98', '#b98c78', '#ac7a65', '#f2d9c1', '#e8c1aa', '#CF9776', '#E5B598', '#DFBA9C',
    '#D99A67', '#EBB579', '#EFC698', '#96442e', '#bc6f36', '#ef9a30', '#dca240', '#f0d781', '#e0a32d', '#f2bd6f', '#ecaf54',
    '#fabd68', '#fcd48f', '#f6c9a0', '#f9b982', '#fde8ba', '#CE996F', '#E6B18F', '#EFC1A0', '#F7C2A5', '#B07E59', '#DAB68D',
    '#E5BF9E', '#FEDFBF', '#FFE8CC', '#C89F7B', '#E4BA8B', '#A27651', '#A96E40', '#FEDABC', '#D6A285', '#F9C79F', '#FACAAA',
    '#E7B88E', '#F1C6A3', '#ca9576', '#deb386', '#d1ae9b', '#dab394', '#eac9a6', '#E9B39A', '#F2BC94', '#ba713e', '#ac7f55',
    '#d29e6e', '#daa273', '#e2ab82', '#eeb57e', '#e7b381', '#e5ad8c', '#efcba7', '#e5bd99', '#d4ad89', '#cfa37d', '#f0d1b2',
    '#f6d6bc', '#E3B18E', '#EBBE9F', '#EBC2A6', '#E4A788', '#F6C9A0', '#975A3E', '#C06F54', '#A26C52', '#D19478', '#CEA98E',
    '#E9BFA6', '#C5936D', '#E09E69', '#ECB991', '#F0C8A4', '#EEB895', '#E1BD9E', '#DDB494', '#D09A7A', '#E5BEA5', '#94583F',
    '#A0633E', '#af622e', '#d5845d', '#dfb698', '#DFA585', '#ecaa7d', '#ebb486', '#e8c3a5', '#fee0c1', '#f7e8cc', '#F9C8AD',
    '#DDA17B', '#f2d7c2', '#492117', '#834127', '#AE704B', '#CC9157', '#BC7E4D', '#DBA157', '#C8A480', '#B48C5B', '#AF7A52',
    '#F1C69C', '#EAD4AB', '#D2A279', '#D3A389', '#D09F80', '#E1B090', '#EAC2A8', '#E4B99C', '#FCD1B9', '#F9D4B6', '#ba6839',
    '#dc8c68', '#edbc92', '#DBA777', '#F9E6E0', '#E2A587', '#C38E6A', '#CF9A79', '#D2AD84', '#E8BD90', '#EAD3B3', '#CA9B5F',
    '#C99F6D', '#ECD3B2', '#DCBCA3', '#9A6438', '#D7C1B3', '#C28C5E', '#F7AC8C', '#936F44', '#FBD8A8', '#583B1C', '#322415',
    '#5D2E17', '#8F5E31', '#C48B5E', '#906832', '#f5d6c1', '#fce3d6', '#f3e2dc', '#E3B89B', '#ecd1bb', '#ecc9a3', '#ffffee',
    '#E3BA94', '#E8C29E', '#E9CEB1', '#E8C196', '#E0A772', '#EFAE76', '#F7B990', '#C18D5C', '#E1AF7E', '#F1CEAF', '#A05F21',
    '#F9D084', '#ECC665', '#FBDCB7', '#FDCB70', '#F6E6B2', '#CFAE61', '#F0D468', '#C4923E', '#E2BF80', '#DA8F23', '#F5D090',
    '#924C17', '#A85226', '#E3AE2C', '#DBA621', '#F2B276', '#E7C078', '#F4E2C2', '#FBC657', '#ECB78F', '#d8bda8', '#d9bcaf',
    '#f5dfc3', '#edd3ac', '#dfc5a8', '#f3d7b3', '#CA8B67', '#D39B70', '#FACFA8', '#FFD9B9', '#FFE5C1', '#FFE4C6', '#D79A78',
    '#E0AD7C', '#E2AB70', '#E5B383', '#F3C391', '#FBCCA0', '#e9cdb2', '#eaccb3', '#ebcaaf', '#f2dfc9', '#f5dbc8', '#AC6F48',
    '#C58160', '#CDA08E', '#E7C1AD', '#f4c1a4', '#fbd0bd', '#daa778', '#eabe9b', '#ca9774', '#e2a98e', '#f3c8aa', '#f2cdaf',
    '#eacfbb', '#f0d7c4', '#f8e5d1', '#faefdc', '#f9e3d5', '#FAE2D6', '#EFC2A1', '#EEBAA4', '#F8E0D4', '#F1BEAB', '#E2B598',
    '#F6D2BC', '#E4A890', '#F3BEAC', '#B37560', '#F5CAB9', '#D39D7B', '#C6956D', '#C49068', '#BA8A62', '#E1AC8C', '#D5AC8C',
    '#C99B77', '#563224', '#643525', '#765545', '#955d44', '#98603d', '#b6754e', '#b67c4e', '#af876c', '#d8a277', '#cea082',
    '#d19d7a', '#d3ac93', '#d3b099', '#f2c198', '#dcb79a', '#f2c7a4', '#e1c1a8', '#eaccb6', '#f6d4b9', '#ebd6ca', '#f6ded1',
    '#fae6db', '#794328', '#9a5838', '#ecbb9b', '#efc5a9', '#f8dfcf', '#795947', '#a2775f', '#cea17f', '#eabd97', '#edcebd',
    '#efd1b9', '#f8e0ca', '#eed7ca', '#905839', '#c48152', '#c98758', '#d69a6a', '#e2aa78', '#e3b180', '#e1b088', '#e9bc91',
    '#e3b998', '#ecc9a9', '#88563d', '#a3704c', '#c08555', '#cf9669', '#d5a07a', '#e4b796', '#e1b294', '#B17966', '#ac7d68',
    '#C08571', '#D9A593', '#e1b89f', '#E9BBA4', '#f1c5ab', '#F8D5C4', '#b17966', '#c08571', '#d9a593', '#e9bba4', '#f8d5c4',
    '#95633b', '#ab7045', '#c48459', '#d49569', '#d7a280', '#e2be9b', '#ecc6af',
  ],
  FOUNDATION_BB_CC: [
    '#b17c60', '#9e6d4e', '#e2b49d', '#e9c9b4', '#d4a47f', '#f8e2cc', '#e9c09f', '#f3d6c7', '#7C4B2D', '#965831', '#C77E4D',
    '#DD925F', '#ECAD79', '#F2B791', '#784311', '#9c6018', '#a0672e', '#cea176', '#e9b88b', '#88563d', '#a3704c', '#c08555',
    '#cf9669', '#d5a07a', '#e4b796', '#e1b294', '#B17966', '#ac7d68', '#C08571', '#D9A593', '#e1b89f', '#E9BBA4', '#f1c5ab',
    '#F8D5C4', '#b17966', '#c08571', '#d9a593', '#e9bba4', '#f8d5c4', '#95633b', '#ab7045', '#c48459', '#d49569', '#d7a280',
    '#e2be9b', '#ecc6af',
  ],
  FOUNDATION_POWDER: [
    '#cf743b', '#dc8e5a', '#fbb171', '#f9be8a', '#ecba97', '#f4d4bb', '#f9d9be', '#f1d3b5', '#f4dac4',
  ],
  FOUNDATION_CREAM: [
    '#64300a', '#793f0d', '#9e6209', '#ac703d', '#e5ae86', '#ECB78F', '#d8bda8', '#d9bcaf', '#f5dfc3', '#edd3ac', '#dfc5a8',
    '#f3d7b3', '#CA8B67', '#D39B70', '#FACFA8', '#FFD9B9', '#FFE5C1', '#FFE4C6', '#D79A78', '#E0AD7C', '#E2AB70', '#E5B383',
    '#F3C391', '#FBCCA0', '#e9cdb2', '#eaccb3', '#ebcaaf', '#f2dfc9', '#f5dbc8', '#AC6F48', '#C58160', '#CDA08E', '#E7C1AD',
    '#f4c1a4', '#fbd0bd', '#daa778', '#eabe9b', '#ca9774', '#e2a98e', '#f3c8aa', '#f2cdaf', '#eacfbb', '#f0d7c4', '#f8e5d1',
    '#faefdc', '#f9e3d5', '#FAE2D6', '#EFC2A1', '#EEBAA4', '#F8E0D4', '#F1BEAB', '#E2B598', '#F6D2BC', '#E4A890', '#F3BEAC',
    '#B37560', '#F5CAB9', '#D39D7B', '#C6956D', '#C49068', '#BA8A62', '#E1AC8C', '#D5AC8C', '#C99B77',
  ],
  FOUNDATION_LIQUID: [
    '#b37750', '#bc855f', '#d9a37f', '#dfa585', '#dead87', '#e2ae8e', '#e5b495', '#e6ba9f', '#e8b89b', '#f1c7b1', '#fadbc7',
    '#CE9E88', '#FBD8AA', '#FFD9A6', '#CB9E6C', '#FFD59E', '#D89A75', '#E3B08F', '#E3B591', '#E5C5A3', '#E3C7AA', '#C38961',
    '#DFBDA2', '#dcab98', '#b98c78', '#ac7a65', '#f2d9c1', '#e8c1aa', '#CF9776', '#E5B598', '#DFBA9C', '#D99A67', '#EBB579',
    '#EFC698', '#96442e', '#bc6f36', '#ef9a30', '#dca240', '#f0d781', '#e0a32d', '#f2bd6f', '#ecaf54', '#fabd68', '#fcd48f',
    '#f6c9a0', '#f9b982', '#fde8ba', '#CE996F', '#E6B18F', '#EFC1A0', '#F7C2A5', '#B07E59', '#DAB68D', '#E5BF9E', '#FEDFBF',
    '#FFE8CC', '#C89F7B', '#E4BA8B', '#A27651', '#A96E40', '#FEDABC', '#D6A285', '#F9C79F', '#FACAAA', '#E7B88E', '#F1C6A3',
    '#ca9576', '#deb386', '#d1ae9b', '#dab394', '#eac9a6', '#E9B39A', '#F2BC94', '#ba713e', '#ac7f55', '#d29e6e', '#daa273',
    '#e2ab82', '#eeb57e', '#e7b381', '#e5ad8c', '#efcba7', '#e5bd99', '#d4ad89', '#cfa37d', '#f0d1b2', '#f6d6bc', '#E3B18E',
    '#EBBE9F', '#EBC2A6', '#E4A788', '#F6C9A0', '#975A3E', '#C06F54', '#A26C52', '#D19478', '#CEA98E', '#E9BFA6', '#C5936D',
    '#E09E69', '#ECB991', '#F0C8A4', '#EEB895', '#E1BD9E', '#DDB494', '#D09A7A', '#E5BEA5', '#94583F', '#A0633E', '#af622e',
    '#d5845d', '#dfb698', '#DFA585', '#ecaa7d', '#ebb486', '#e8c3a5', '#fee0c1', '#f7e8cc', '#F9C8AD', '#DDA17B', '#f2d7c2',
    '#492117', '#834127', '#AE704B', '#CC9157', '#BC7E4D', '#DBA157', '#C8A480', '#B48C5B', '#AF7A52', '#F1C69C', '#EAD4AB',
    '#D2A279', '#D3A389', '#D09F80', '#E1B090', '#EAC2A8', '#E4B99C', '#FCD1B9', '#F9D4B6', '#ba6839', '#dc8c68', '#edbc92',
    '#DBA777', '#F9E6E0', '#E2A587', '#C38E6A', '#CF9A79', '#D2AD84', '#E8BD90', '#EAD3B3', '#CA9B5F', '#C99F6D', '#ECD3B2',
    '#DCBCA3', '#9A6438', '#D7C1B3', '#C28C5E', '#563224', '#643525', '#765545', '#955d44', '#98603d', '#b6754e', '#b67c4e',
    '#af876c', '#d8a277', '#cea082', '#d19d7a', '#d3ac93', '#d3b099', '#f2c198', '#dcb79a', '#f2c7a4', '#e1c1a8', '#eaccb6',
    '#f6d4b9', '#ebd6ca', '#f6ded1', '#fae6db', '#794328', '#9a5838', '#ecbb9b', '#efc5a9', '#f8dfcf', '#795947', '#a2775f',
    '#cea17f', '#eabd97', '#edcebd', '#efd1b9', '#f8e0ca', '#eed7ca', '#905839', '#c48152', '#c98758', '#d69a6a', '#e2aa78',
    '#e3b180', '#e1b088', '#e9bc91', '#e3b998', '#ecc9a9',
  ],
  FOUNDATION_MINERAL: [
    '#F7AC8C', '#936F44', '#FBD8A8', '#583B1C', '#322415', '#5D2E17', '#8F5E31', '#C48B5E', '#906832', '#f5d6c1', '#fce3d6',
    '#f3e2dc', '#FFD59E', '#E3B89B', '#ecd1bb', '#ecc9a3', '#ffffee', '#E3BA94', '#E8C29E', '#E9CEB1', '#E8C196', '#E0A772',
    '#EFAE76', '#F7B990', '#C18D5C', '#E1AF7E', '#F1CEAF', '#A05F21', '#F9D084', '#ECC665', '#FBDCB7', '#FDCB70', '#F6E6B2',
    '#CFAE61', '#F0D468', '#C4923E', '#E2BF80', '#DA8F23', '#F5D090', '#924C17', '#A85226', '#E3AE2C', '#DBA621', '#F2B276',
    '#E7C078', '#F4E2C2', '#FBC657',
  ],
  CONCEALER: [
    '#8f5628', '#c47b4d',
  ],
  LIP_LINER: [
    '#D35A63', '#742C49', '#6B2635', '#B12652', '#A85A49', '#BB878D', '#BA6E68', '#8D644B', '#955C51', '#B32464', '#E46EBE',
    '#6E3246', '#762528', '#931659', '#ce6e7e', '#ae4a52', '#945a62', '#884f3f', '#862c3b', '#803339', '#6d3735', '#B3705A',
    '#854337', '#7B4344', '#A15638', '#953447', '#bb0c4d', '#862546', '#9c1114', '#854e39', '#804e37', '#7C183E', '#AE7269',
    '#7B4C43', '#891635', '#AE7374', '#A05F51', '#6D071D', '#B7656D', '#f79e83', '#7a1533', '#c04941', '#95374f', '#93474f',
    '#A2051A', '#C56D61', '#EC81A9', '#BD7B85', '#BE386D', '#932C49', '#F2ACA2', '#EC444A', '#C03C2D', '#931919', '#883027',
    '#71161E', '#FFB2E6', '#FF3399', '#EBBAA2', '#C08D72', '#cb7671', '#a2615b', '#845946', '#cc7e68', '#863e4c', '#a25d60',
    '#a25b59', '#d4575f', '#c16574', '#c96e73', '#a6636a', '#b8676e', '#C73932', '#CC5B6B', '#D4817C', '#DF6973', '#CC5A7C',
    '#F07E84',
  ],
  LIPSTICK: [
    '#994835', '#BA6C6C', '#BD7069', '#83605E', '#B16B61', '#DEA1A6', '#f07273', '#ef74a5', '#9c4b3f', '#d97484', '#a95661',
    '#d8222d', '#cf254c', '#cb1861', '#f07ea4', '#ed4838', '#df888d', '#95164a', '#e14c70', '#f1766c', '#da1f3e', '#ee5c5f',
    '#a7363e', '#b47b6d', '#C26659', '#F57574', '#C55456', '#D40D14', '#7D2D3A', '#FCAE98', '#FF4E62', '#A93041', '#E53134',
    '#99302A', '#F2579B', '#E66675', '#de4b41', '#D94072', '#c63e26', '#971D28', '#a02d4b', '#B14F5B', '#94514C', '#9F455A',
    '#d09172', '#663125', '#df6163', '#B47965', '#6D333A', '#A16157', '#B26487', '#AE4349', '#B06A60', '#892026', '#662A2C',
    '#811A35', '#B66F61', '#8B214F', '#853D53', '#7A2946', '#CD6A86', '#AE4B74', '#831F41', '#A86160', '#f7b8b8', '#e2321e',
    '#a96354', '#FF4E3A', '#F3A98C', '#F26D6D', '#EE001C', '#ED062F', '#EB8B86', '#DA89A0', '#CD808F', '#CA4B63', '#C50032',
    '#C4615E', '#BE4D2A', '#B62252', '#B3202F', '#B14862', '#946893', '#4f2114', '#FF5B24', '#EF8579', '#DA3A44', '#EB7583',
    '#ba0000', '#ff6ab6', '#ff3b00', '#ff4a62', '#ff2e8c', '#f9005b', '#ae5e57', '#DF4921', '#421E26', '#981E26', '#e1b5a4',
    '#870D0D', '#7C4182', '#501E31', '#301623', '#e172ac', '#A14D57', '#a42036', '#d590a8', '#824A4D', '#923144', '#D1949C',
    '#C63232', '#E6A2A3', '#D4233F', '#9B3F4A', '#AA2A63', '#EF4D75', '#DA2D26', '#C20D20', '#C1738F', '#BD736B', '#A14667',
    '#8E0F34', '#7C109A', '#5A0011', '#A2356C', '#56181B', '#B26457', '#F77234', '#8B2058', '#A5051D', '#FE3D93', '#9D6670',
    '#AB0B11', '#A71800', '#D78396', '#E01783', '#963546', '#EB9DAD', '#D55B3C', '#B6605F', '#DA7A6C', '#D96081', '#C92F0B',
    '#AC5446', '#5C3D31', '#F3574B', '#F296CF', '#5E172D', '#9A3306', '#9E283E', '#6E4148', '#B6091D', '#A87363', '#8B5E49',
    '#C3937F', '#C07764', '#B47B68', '#C18676', '#936D5A', '#8C3A2F', '#AD6E77', '#BE9279', '#AC6F5D', '#835545', '#C18877',
    '#F6B197', '#C21919', '#c52531', '#761214', '#A44D54', '#C37685', '#B3857D', '#B5353A', '#FF244B', '#A33750', '#b63849',
    '#f5367d', '#ec0064', '#db5c83', '#ff2f99', '#e87e74', '#ff1303', '#A25B69', '#E68179', '#A86A79', '#8F2468', '#BE5A98',
    '#C21E40', '#BA5E59', '#C15669', '#6E0D2E', '#CB5A56', '#D18561', '#BF289B', '#AC6A47', '#D81D2C', '#9D0026', '#EBA0B7',
    '#CF8C83', '#8F4D57', '#7B273F', '#995749', '#E84230', '#FF8383', '#E68F71', '#7C1C1D', '#CA6547', '#DA765F', '#B60442',
    '#E96785', '#6C1947', '#BF454F', '#8A1528', '#CA6E6B', '#8F332C', '#F15B50', '#DF8A82', '#E70C2F', '#9E0C30', '#D46C6A',
    '#B03062', '#DA5468', '#9e1b3b', '#763c36', '#dc4787', '#9a3056', '#cb1e4b', '#af675e', '#f05283', '#d46179', '#f51f41',
    '#eb796f', '#f3748f', '#c66294', '#a13954', '#c24651', '#e89da2', '#5a243b', '#d33c2e', '#dc6375', '#c5725f', '#b25875',
    '#e01d25', '#b75b4e', '#dc6d81', '#d9695a', '#aa2b37', '#692628', '#bf3238', '#891228', '#bd2150', '#a7082e', '#955b57',
    '#9B5247', '#C63C7F', '#E96874', '#5D3035', '#A02E28', '#602944', '#E7422C', '#D26D5E', '#D64148', '#E43B2E', '#F1928D',
    '#AE1A1A', '#C75878', '#da8f83', '#C91A19', '#b06c69', '#a65463', '#FC6A86', '#a83b52', '#a8444e', '#C18181', '#9f596b',
    '#974f5a', '#7F355D', '#C97DA4', '#824e73', '#a1534f', '#a84c61', '#bd7775', '#cb5a6e', '#a3656a', '#903459', '#b22a4a',
    '#C15555', '#D03370', '#FC5B9D', '#C81E2F', '#B41428', '#B0233E', '#C14E5C', '#FC6E7F', '#955C69', '#FF99DC', '#B42F3F',
    '#C06E8A', '#F393B0', '#E18CB0', '#FF94A7', '#CF444B', '#EF6E87', '#782B2F', '#C90E32', '#D82A37', '#C5004B', '#8E1305',
    '#AB0C19', '#300B28', '#542A71', '#8C1F48', '#B7233B', '#BC2830', '#B12156', '#D73D8C', '#D65F84', '#BD7A80', '#AC7773',
    '#8c212b', '#f9636d', '#b7021e', '#ff88b1', '#bd2629', '#ff8f9d', '#cd86b0', '#f05b4a', '#d37d79', '#db967f', '#DB3B3D',
    '#E1A2A3', '#DF5A99', '#BC2A2D', '#DA506A', '#A32950', '#E7A680', '#E379A1', '#CB705D', '#6F1E2C', '#E07875', '#EBACA3',
    '#A30017', '#8E4852', '#E58674', '#BF7061', '#eb4296', '#ef5e5f', '#e02246', '#ce8886', '#894643', '#b55d6d', '#f07b98',
    '#d9198b', '#c8a0bc', '#f18085', '#cc3b75', '#d8242f', '#a41c42', '#ad3b33', '#b80229', '#7d2034', '#8a3850', '#ff5864',
    '#f3576c', '#d14146', '#d64d3e', '#712f29', '#963a38', '#B75E4E', '#79283B', '#481E32', '#F6A9BE', '#9F3A76', '#FC5236',
    '#9A2B46', '#E62F67', '#103167', '#F32E17', '#AE6F66', '#CD888C', '#C9404D', '#612E8D', '#5F192B', '#924A41', '#DA956F',
    '#F19988', '#933A40', '#E44B82', '#9D6D61', '#590004', '#8A3938', '#D47661', '#E2937F', '#A95D50', '#DD8A78', '#EB907D',
    '#E3A28C', '#f382a4', '#f26f67', '#ed8984', '#eabbaa', '#df274f', '#da469a', '#d47e93', '#ce7e82', '#cc7183', '#c77a9b',
    '#c21643', '#b64847', '#b25a5d', '#a36f68', '#9e5e76', '#801b3c', '#D04E83', '#B30232', '#7B050A', '#52182c', '#651738',
    '#734942', '#73308b', '#6a494c', '#874e41', '#a32136', '#af0061', '#d71d32', '#b15336', '#f4436d', '#ff4814', '#a17e49',
    '#c47636', '#602714', '#632528', '#a43a44', '#b5432a', '#c26256', '#d27d56', '#DB3D78', '#B5506E', '#BC525C', '#E96B6F',
    '#E96187', '#BF1790', '#AD6678', '#D15D62', '#FA8F85', '#7A3760', '#DDA1A1', '#F58E7C', '#E6A28E', '#CD859D', '#F76E64',
    '#E69F73', '#FE7C61', '#FC86AF', '#F96173', '#DE6463', '#FD6C65', '#F08C8C', '#E96384', '#DC002C', '#E46A79', '#FA394C',
    '#CF337A', '#FF898F', '#970015', '#AB6BA0', '#DAA8C5', '#FEC7CC', '#FBBBD3', '#EF8087', '#F8C9BF', '#F7E4C6', '#A1605E',
    '#975D4F', '#AA202E', '#BB5F60', '#C9528C', '#C27273', '#C1486C', '#981E29', '#B1585C', '#892E33', '#793041', '#54281F',
    '#AE2343', '#B53034', '#CF2D4F', '#635961', '#53250d', '#640719', '#6e1243', '#7f1917', '#933c44', '#923459', '#a856a2',
    '#bd2467', '#cb2648', '#cc2127', '#e74425', '#a82024', '#c84b47', '#9c4035', '#a04322', '#ad5851', '#b76f60', '#9e5c4c',
    '#af5561', '#5d4e51', '#151516', '#20233b', '#103254', '#401e3e', '#4c1920', '#8e0e26', '#540734', '#78243e', '#c42738',
    '#c72036', '#bc4d5e', '#ef5190', '#f0aec1', '#feb6ce', '#ed7fa1', '#f16583', '#9a4a96', '#c86ba9', '#a16695', '#ac1d4b',
    '#981925', '#b5214a', '#df3743', '#453a3c', '#df2127', '#472319', '#d23a32', '#bc3a36', '#310020', '#cf4e39', '#662b65',
    '#d34031', '#780c40', '#6c351c', '#71081e', '#c1234c', '#713236', '#6a0d37', '#a31228', '#690927', '#ba433f', '#6f1b29',
    '#dd3c46', '#761e1e', '#ee3538', '#633012', '#c14961', '#733c36', '#ee3882', '#7d2d2f', '#4c2c28', '#8c3b47', '#5e0a17',
    '#8d3d45', '#711115', '#8d4241', '#703850', '#a15e5f', '#871544', '#8f122c', '#985349', '#833640', '#bd6165', '#9f4430',
    '#af4c42', '#8d564b', '#8a3c3f', '#913c33', '#bb5a54', '#793c41', '#b26054', '#73312c', '#a95647', '#7d3b34', '#aa5e41',
    '#b26f69', '#8b4a45', '#a56858', '#835947', '#904f50', '#a5786d', '#8a4f52', '#a76458', '#bd7863', '#8d5247', '#a26251',
    '#d06c58', '#c6745d', '#d9786d', '#d69082', '#cf8171', '#da8177', '#b95952', '#c9636d', '#c57483', '#dc7a81', '#cb7988',
    '#c81c71', '#c37588', '#d3818f', '#e4838e', '#82183b', '#bb3675', '#701e4c', '#fa6085', '#c08a79', '#995c50', '#dd4169',
    '#53041c', '#e75999', '#8b404c', '#e5859a', '#bb2f67', '#b65689', '#d48d93', '#bf999f', '#d99684', '#642b24', '#c03c3b',
    '#c16055', '#ed262f', '#d21380', '#e53368', '#92195d', '#952a3e', '#a31530', '#d71938', '#f48376', '#ee8aa1', '#de7e8d',
    '#d3716e', '#ad5240', '#663f38', '#a05745', '#b47352', '#e49380', '#771c47', '#a43e5b', '#da5f5f',
  ],
  LIP_GLOSS: [
    '#ff4c4e', '#fb908a', '#d55862', '#f6f6f6', '#d0609d', '#fc4c88',
  ],
  LIP_STAIN: [
    '#DE9777', '#CE5858', '#FD86BC', '#DF1536', '#8E304A', '#a64877', '#a65875', '#b45858', '#c16576', '#cd8083', '#d74844', '#e898bc',
    '#E8544A', '#6B203E', '#DA3055', '#D94C52', '#DA5067', '#A85988',
  ],
  MASCARA: [
    '#3E2829', '#000000', '#030000', '#4D2C00', '#231F20', '#282828', '#2d2d2d', '#0E0F11', '#2d1e17', '#202020', '#262626',
    '#0D090A', '#030001', '#120C0A', '#413025', '#262633', '#202217', '#26364C', '#1B2D2D', '#452319', '#403426', '#1B1B1B',
    '#3B4356', '#3D303E', '#413736', '#18191D', '#01336f', '#64250d', '#0a070c', '#493023',
  ],
  NAIL_POLISH: [
    '#aa5477', '#b75c3f', '#cd857b', '#c3adaf', '#C8D8F2', '#a20f0f', '#4f4849', '#733166', '#1a4971', '#ca6780', '#bb5439',
    '#b95b77', '#CF72A1', '#EC606B', '#6A84BD', '#C47690', '#FF9680', '#EACBC9', '#53C5D0', '#EDE6DC', '#FD92BE', '#BCA8C4',
    '#FF8C6F', '#EECCCD', '#D1DFCA', '#20A4CB', '#FF199F', '#F78DCF', '#889D9E', '#B0246B', '#C84F85', '#EB5C78', '#BC6497',
    '#8CB4C4', '#2762B2', '#EB00A1', '#FDA4A6', '#44001b', '#dc104f', '#dfbdbd', '#74cbc2', '#EDE1D6', '#0e4a45', '#D1C6C5',
    '#f2706b', '#FF726F', '#fde7ea', '#02221d', '#4f3d49', '#c8b6a2', '#951517', '#2C6D45', '#a50037', '#967bb9', '#484445',
    '#32195a', '#e9adc1', '#af9a95', '#bde0c5', '#D6C7CD', '#001445', '#776670', '#9d8f8e', '#e9e8e7', '#F46DB9', '#fff4ee',
    '#cab1ce', '#130a09', '#658cbd', '#d5b0b7', '#61C3D5', '#81373e', '#D9B3C0', '#F9006B', '#225443', '#004153', '#DEE8EE',
    '#f9ced7', '#ee1930', '#CDEAD8', '#d2878c', '#EE0A5A', '#e41641', '#E0BEA6', '#908080', '#CD565B', '#b77c66', '#1d5ca0',
    '#5d2d31', '#f1f1ec', '#b2d8f2', '#552C32', '#43787E', '#fbf1ef', '#56152f', '#20417d', '#894662', '#2D3450', '#C0C8B3',
    '#be254e', '#66073B', '#EA5994', '#B40B4E', '#B4A48D', '#FDE4E7', '#C18076', '#BE0018', '#A5082E', '#F9F9F9', '#C6168D',
    '#520111', '#E52F58', '#7D8BC8', '#4a3574', '#2C2E2D', '#B35448', '#A03296', '#ed1c24', '#b29a92', '#61a9d3', '#5E0012',
    '#AE6475', '#96181B', '#E1AD94', '#C80047', '#BC7F40', '#F7ABB8', '#720a2d', '#F15D5A', '#F09AA9', '#EED8E3', '#E3BFC6',
    '#E98C70', '#A56340', '#BD3127', '#EBE8F6', '#FD4431', '#780613', '#D37959', '#E6B896', '#F3F2F0', '#016F6E', '#800412',
    '#188260', '#671F20', '#F792A5', '#EB7685', '#B2ACA5', '#77A981', '#1A276B', '#0BADC1', '#46197C', '#B69BA0', '#6A65BA',
    '#F4602B', '#EEB3A5', '#5B4668', '#C30D37', '#25348D', '#F8E2CC', '#DA1A79', '#EE1F70', '#FE920A', '#9AD0C8', '#FC5A21',
    '#070706', '#C281B6', '#9e6b56', '#a18c70', '#6a6f72', '#C0B7AF', '#9A043B', '#44092B', '#033C8D', '#CC2828', '#FD5758',
    '#E44579', '#983539', '#d8afb7', '#ebd9cd', '#dbc59b', '#BD3871', '#8b7267', '#f38d6a', '#7b6a52', '#d1b494', '#4b1d33',
    '#590203', '#eed4d2', '#e89488', '#aa897e', '#FFE5EA', '#AD7A69', '#CEC8BD', '#F72008', '#FCD1A9', '#470900', '#FFDCD2',
    '#9B9180', '#D09785', '#FFACB6', '#FF6356', '#DB0100', '#FF5575', '#BA7AA2', '#A7485E', '#B0A482', '#F57984', '#005B83',
    '#D7E0E8', '#B31733', '#736641', '#FEC2BA', '#45060F', '#832A66', '#C5C5C7', '#E7E8EA', '#262425', '#2f4a61', '#938a98',
    '#f3e5de', '#a57f7b', '#037679', '#72545D', '#AF6E67', '#E1B89C', '#AB7680', '#721f29', '#8b6e6b', '#d9c2d2', '#dec3bc',
    '#f0c9de', '#a7aba4', '#e1c490', '#7e876b', '#efe8db', '#76868C', '#005A98', '#827D7A', '#ba3252', '#e13947', '#d4bc98',
    '#3a2657', '#86cecd', '#a96e6a', '#2d4b4d', '#394674', '#272727', '#017F8D', '#ED4696', '#B0A07F', '#AC1B82', '#9A0C2F',
    '#F51D04', '#C39561', '#423D38', '#EB1B03', '#F7F6F6', '#EC4697', '#640101', '#9F1626', '#071485', '#713A48', '#AD4564',
    '#C60C21', '#5D0016', '#FF2784', '#007E85', '#A00260', '#0061BF', '#152B77', '#F78963', '#51010E', '#80ADB3', '#AD0248',
    '#020202', '#DF036D', '#410211', '#e11936', '#da3778', '#e21d4b', '#e63350', '#241518', '#581328', '#591129', '#631232',
    '#681364', '#6c1657', '#db0930', '#171916', '#401e14', '#55413a', '#8C0002', '#C4658F', '#A99483', '#521B3E', '#251414',
    '#ECFA05', '#989EA5', '#F2769B', '#F5F5F6', '#295D92', '#81437B', '#C70F14', '#8BA85C', '#7450A7', '#E2B7BF', '#AC0173',
    '#EF4EA4', '#BB687A', '#131315', '#B1ADA9', '#93B592', '#02E72D', '#837E9A', '#730118', '#FE3A68', '#058B72', '#967D50',
    '#E3B2A4', '#F16293', '#F37B6B', '#F12BB8', '#521419', '#A57B88', '#96A8B4', '#0B8EA7', '#3E0D70', '#584D97', '#EE3794',
    '#ECE95E', '#3DAC81', '#DCA29E', '#D4D5B6', '#DE8FA4', '#93C0A9', '#EB4843', '#CA6527', '#104F8D', '#7B113A', '#D5A026',
    '#967971', '#DDA4B3', '#E4A993', '#F58786', '#F25834', '#ECD888', '#004318', '#060606', '#F1F1E7', '#B185B8', '#F35973',
    '#EFAAA3', '#887C7C', '#DBAA82', '#622A81', '#B3060C', '#F55B67', '#0380B6', '#DCE1E7', '#E6C745', '#F09891', '#FEA57B',
    '#F3AC9E', '#85C3AE', '#D9BAA7', '#F69082', '#828F98', '#CEBCD2', '#FD76BA', '#E1C99D', '#C7C7C7', '#ED8553', '#DAC3B1',
  ],
};

export default Colours;
