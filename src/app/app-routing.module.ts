import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { DataResolverService } from './services/resolver/data-resolver.service'

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule) },
  {
    path: 'account-add',
    loadChildren: () => import('./pages/account-add/account-add.module').then(m => m.AccountAddPageModule)
  },
  {
    path: 'account-import-onboarding/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () =>
      import('./pages/account-import-onboarding/account-import-onboarding.module').then(m => m.AccountImportOnboardingPageModule)
  },
  {
    path: 'select-wallet/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/select-wallet/select-wallet.module').then(m => m.SelectWalletPageModule)
  },
  {
    path: 'account-import/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/account-import/account-import.module').then(m => m.AccountImportPageModule)
  },
  {
    path: 'account-transaction-list/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () =>
      import('./pages/account-transaction-list/account-transaction-list.module').then(m => m.AccountTransactionListPageModule)
  },
  {
    path: 'transaction-detail/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/transaction-detail/transaction-detail.module').then(m => m.TransactionDetailPageModule)
  },
  {
    path: 'sub-account-add/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/sub-account-add/sub-account-add.module').then(m => m.SubAccountAddPageModule)
  },
  {
    path: 'sub-account-select/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/sub-account-select/sub-account-select.module').then(m => m.SubAccountSelectPageModule)
  },
  {
    path: 'sub-account-import/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/sub-account-import/sub-account-import.module').then(m => m.SubAccountImportPageModule)
  },
  {
    path: 'account-address/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/account-address/account-address.module').then(m => m.AccountAddressPageModule)
  },
  {
    path: 'transaction-prepare/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/transaction-prepare/transaction-prepare.module').then(m => m.TransactionPreparePageModule)
  },
  {
    path: 'interaction-selection/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/interaction-selection/interaction-selection.module').then(m => m.InteractionSelectionPageModule)
  },
  {
    path: 'transaction-qr/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/transaction-qr/transaction-qr.module').then(m => m.TransactionQrPageModule)
  },
  {
    path: 'scan-address/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/scan-address/scan-address.module').then(m => m.ScanAddressPageModule)
  },
  {
    path: 'exchange-confirm/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/exchange-confirm/exchange-confirm.module').then(m => m.ExchangeConfirmPageModule)
  },
  {
    path: 'transaction-confirm/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/transaction-confirm/transaction-confirm.module').then(m => m.TransactionConfirmPageModule)
  },
  {
    path: 'delegation-detail/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/delegation-detail/delegation-detail.module').then(m => m.DelegationDetailPageModule)
  },
  {
    path: 'settings-beacon',
    loadChildren: () => import('./pages/settings-beacon/settings-beacon.module').then(m => m.SettingsBeaconPageModule)
  },
  {
    path: 'delegation-list/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/delegation-list/delegation-list.module').then(m => m.DelegationListPageModule)
  },
  {
    path: 'exchange-select',
    loadChildren: () => import('./pages/exchange-select/exchange-select.module').then(m => m.ExchangeSelectPageModule)
  },
  {
    path: 'exchange-custom',
    loadChildren: () => import('./pages/exchange-custom/exchange-custom.module').then(m => m.ExchangeCustomPageModule)
  },
  {
    path: 'beacon-permission-list',
    loadChildren: () => import('./pages/beacon-permission-list/beacon-permission-list.module').then(m => m.BeaconPermissionListPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorPageModule)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
