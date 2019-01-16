/**
 * @preserve
 * Authors: Emre ÇAĞLAR
 * Last updated: Jan 16, 2019
 *
 * Description: Definition file for Turkish - Turkey language-country.
 */
import * as C from '../constants';

const dictionary = {
  languageCode: 'tr-TR',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Yukarı satır ekle',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: 'Aşağı satır ekle',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: 'Sola kolon ekle',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: 'Sağa kolon ekle',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Satır sil', 'Satırları sil'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Kolon sil', 'Kolonları sil'],
  [C.CONTEXTMENU_ITEMS_UNDO]: 'Geri al',
  [C.CONTEXTMENU_ITEMS_REDO]: 'Yeniden yap',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: 'Okunabilir',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: 'Kolonu temizle',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: 'Hizala',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: 'Sol dayalı',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: 'Yatay ortala',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: 'Sağa dayalı',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: 'Justify',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: 'Yukarı dayalı',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: 'Dikey ortala',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: 'Alta dayalı',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: 'Kolonu dondur',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: 'Kolonu çöz',

  [C.CONTEXTMENU_ITEMS_BORDERS]: 'Kenarlıklar',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: 'Üst',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: 'Sağ',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: 'Alt',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: 'Sol',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: 'Kenarlık(ları) kaldır',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: 'Açıklama ekle',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: 'Açıklamayı düzenle',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: 'Açıklamayı sil',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: 'Okunabilir açıklama',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: 'Hücreleri birleştir',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: 'Hücreleri ayır',

  [C.CONTEXTMENU_ITEMS_COPY]: 'Kopyala',
  [C.CONTEXTMENU_ITEMS_CUT]: 'Kes',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: 'Alt satır ekle',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: 'Ana satırdan ayır',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['Kolonu gizle', 'Kolonları gizle'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['Kolonu göster', 'Kolonları göster'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['Satırı gizle', 'Satırları gizle'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['Satırı göster', 'Satırları göster'],

  [C.FILTERS_CONDITIONS_NONE]: 'Yok',
  [C.FILTERS_CONDITIONS_EMPTY]: 'Boşsa',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: 'Boş değilse',
  [C.FILTERS_CONDITIONS_EQUAL]: 'Eşitse',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: 'Eşit değilse',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: 'Başlıyorsa',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: 'Bitiyorsa',
  [C.FILTERS_CONDITIONS_CONTAINS]: 'İçeriyorsa',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: 'İçermiyorsa',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: 'Büyükse',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: 'Büyük veya eşitse',
  [C.FILTERS_CONDITIONS_LESS_THAN]: 'Küçükse',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: 'Küçük veya eşitse',
  [C.FILTERS_CONDITIONS_BETWEEN]: 'Arasındaysa',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: 'Arasında değilse',
  [C.FILTERS_CONDITIONS_AFTER]: 'Sonra',
  [C.FILTERS_CONDITIONS_BEFORE]: 'Önce',
  [C.FILTERS_CONDITIONS_TODAY]: 'Bugün',
  [C.FILTERS_CONDITIONS_TOMORROW]: 'Yarın',
  [C.FILTERS_CONDITIONS_YESTERDAY]: 'Dün',

  [C.FILTERS_VALUES_BLANK_CELLS]: 'Boş hücreler',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: 'Şarta göre filtrele',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: 'İçeriğe göre filtrele',

  [C.FILTERS_LABELS_CONJUNCTION]: 'Ve',
  [C.FILTERS_LABELS_DISJUNCTION]: 'Veya',

  [C.FILTERS_BUTTONS_SELECT_ALL]: 'Tümünü seç',
  [C.FILTERS_BUTTONS_CLEAR]: 'Temizle',
  [C.FILTERS_BUTTONS_OK]: 'Tamam',
  [C.FILTERS_BUTTONS_CANCEL]: 'İptal',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: 'Ara',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: 'Değer',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: 'İkincil değer'
};

export default dictionary;
