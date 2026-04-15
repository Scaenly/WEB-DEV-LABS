from django.urls import path
from api.views import (
    ProductListAPIView, ProductDetailAPIView,
    CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView,
)

# ─────────────────────────────────────────────────────────────
#  URL-конфигурация
#
#  Работает со ВСЕМИ уровнями (FBV / CBV / Mixins / Generics).
#
#  • FBV  — views являются функциями, as_view() не нужен
#  • CBV / Mixins / Generics — views являются классами, нужен .as_view()
#
#  __init__.py сам решает, что именно импортируется.
# ─────────────────────────────────────────────────────────────

def make_view(view):
    if hasattr(view, 'as_view'):
        return view.as_view()
    return view


urlpatterns = [
    # Products
    path('products/', make_view(ProductListAPIView), name='products-list'), 
    path('products/<int:product_id>/', make_view(ProductDetailAPIView), name='products-detail'),

    # Categories
    path('categories/', make_view(CategoryListAPIView), name='categories-list'),
    path('categories/<int:category_id>/', make_view(CategoryDetailAPIView), name='categories-detail'),
    path('categories/<int:category_id>/products/', make_view(CategoryProductsAPIView), name='categories-products'),
]
