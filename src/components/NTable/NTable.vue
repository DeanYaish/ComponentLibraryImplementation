<template>
  <div class="n-table-wrapper">
    <DataTable
      ref="dt"
      :value="data"
      :paginator="paginator"
      :rows="rows"
      :rowsPerPageOptions="rowsPerPageOptions"
      :selectionMode="selectionMode"
      v-model:selection="selected"
      :lazy="lazy"
      :totalRecords="totalRecords"
      :loading="loading"
      @page="onPage"
      @sort="onSort"
      @filter="onFilter"
      @row-select="onRowSelect"
      @row-unselect="onRowUnselect"
      class="n-table"
      :class="{ 'n-table-striped': striped }"
      tableStyle="min-width: 50rem"
      v-bind="$attrs"
    >
      <template #header v-if="$slots.header">
        <slot name="header"></slot>
      </template>

      <Column
        v-if="selectionMode === 'multiple'"
        selectionMode="multiple"
        headerStyle="width: 3rem"
      ></Column>

      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
        :style="col.style"
      >
        <template #body="slotProps" v-if="$slots[`col-${col.field}`]">
          <slot :name="`col-${col.field}`" :data="slotProps.data" :field="col.field"></slot>
        </template>
      </Column>

      <template #footer v-if="$slots.footer">
        <slot name="footer"></slot>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref, watch } from 'vue';

const selected = defineModel<any[]>('selection');

export interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  style?: any;
}

const props = withDefaults(defineProps<{
  data: any[];
  columns: TableColumn[];
  paginator?: boolean;
  rows?: number;
  rowsPerPageOptions?: number[];
  selectionMode?: 'single' | 'multiple' | null;
  lazy?: boolean;
  totalRecords?: number;
  loading?: boolean;
  striped?: boolean;
}>(), {
  paginator: false,
  rows: 10,
  rowsPerPageOptions: () => [5, 10, 20, 50],
  selectionMode: null,
  lazy: false,
  loading: false,
  striped: false
});

const emit = defineEmits<{
  (e: 'page', event: any): void;
  (e: 'sort', event: any): void;
  (e: 'filter', event: any): void;
  (e: 'row-select', event: any): void;
  (e: 'row-unselect', event: any): void;
}>();

const dt = ref();

const onPage = (event: any) => emit('page', event);
const onSort = (event: any) => emit('sort', event);
const onFilter = (event: any) => emit('filter', event);
const onRowSelect = (event: any) => emit('row-select', event);
const onRowUnselect = (event: any) => emit('row-unselect', event);
</script>

<style scoped>
.n-table-wrapper {
  @apply w-full overflow-hidden rounded-lg border border-surface-700;
}

:deep(.p-datatable) {
  @apply bg-surface-900 text-surface-50;
}

:deep(.p-datatable-header) {
  @apply bg-surface-800 border-b border-surface-700 p-4 text-primary-400 font-bold uppercase tracking-wider;
}

:deep(.p-datatable-thead > tr > th) {
  @apply bg-surface-800 text-primary-500 p-3 text-left font-mono text-sm border-b border-surface-600 transition-colors;
}

:deep(.p-datatable-thead > tr > th:hover) {
  @apply text-primary-300;
}

:deep(.p-datatable-tbody > tr) {
  @apply bg-surface-900 text-surface-200 transition-colors border-b border-surface-800;
}

:deep(.p-datatable-tbody > tr:hover) {
  @apply bg-surface-800 text-white;
}

:deep(.p-datatable-tbody > tr.p-highlight) {
  @apply bg-primary-900/30 text-primary-300;
}

:deep(.p-datatable-footer) {
  @apply bg-surface-800 border-t border-surface-700 p-3 text-surface-400 text-sm;
}

/* Striped rows */
.n-table-striped :deep(.p-datatable-tbody > tr:nth-child(even)) {
  @apply bg-surface-800/50;
}

/* Paginator */
:deep(.p-paginator) {
  @apply bg-surface-800 border-t border-surface-700 p-2 flex items-center justify-end gap-2;
}

:deep(.p-paginator-page),
:deep(.p-paginator-next),
:deep(.p-paginator-prev),
:deep(.p-paginator-first),
:deep(.p-paginator-last) {
  @apply text-surface-400 min-w-8 h-8 flex items-center justify-center rounded transition-colors hover:bg-surface-700 hover:text-white;
}

:deep(.p-paginator-page.p-highlight) {
  @apply bg-primary-900 text-primary-400 border border-primary-500/50;
}
</style>
