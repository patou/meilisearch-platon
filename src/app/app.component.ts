import { Component } from '@angular/core';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import { RefinementListItem } from 'instantsearch.js/es/connectors/refinement-list/connectRefinementList';

const searchClient = instantMeiliSearch(
  'http://localhost:7700',
  'lQOoufhq58b38cd83c47e5dc1545fd38ad7ccae1f7cb08e72d2d74159350baf62bb9de8e'
)

const ONE_MONTH = 30 * 24 * 60 * 60
const LABELS : { [key : string]: string } = {
  'COMPANY': 'Company',
  'REMOTE': 'Remote',
  'PARTNER': 'Partner',
  'NONE': 'None',
  'ZENIKA': 'Zenika',
  'ONSITE' : 'On site',
  'PUBLIC': 'Public',
  'OTHER': 'Other',
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meilisearch-platon';
  config = {
    indexName: 'sessions',
    searchClient,
    routing: true,
  }
  dateMenu = [
    { label: 'All' },
    { end: new Date().getTime() / 1000, label: 'Past' },
    { start: new Date().getTime() / 1000, label: 'Futur' },
    { start: new Date().getTime() / 1000 - ONE_MONTH, end: new Date().getTime() / 1000 + ONE_MONTH, label: 'Current' },
  ]
  labels = LABELS

  transformItems(items : RefinementListItem[]) : RefinementListItem[] {
    if (items)
      return items.map(item => ({
        ...item,
        label: LABELS[item.label] || item.label,
        highlighted: LABELS[item.label] || item.label,
      }));
    return items;
  }
}
