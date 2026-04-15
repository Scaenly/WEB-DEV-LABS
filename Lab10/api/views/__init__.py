# ─────────────────────────────────────────────────────────────
#  Переключатель реализаций
#  Чтобы сменить уровень — поменяй ОДИН импорт ниже.
# ─────────────────────────────────────────────────────────────

# Level 2 — Function-Based Views
# from api.views.fbv import (
#     products_list, product_detail,
#     categories_list, category_detail, category_products,
# )

# Level 3 — Class-Based Views (APIView)
# from api.views.cbv import (
#     ProductListAPIView, ProductDetailAPIView,
#     CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView,
# )

# Level 4 — Mixins
# from api.views.mixins import (
#     ProductListAPIView, ProductDetailAPIView,
#     CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView,
# )

# Level 5 — Generic Views (АКТИВНО)
from api.views.generics import (
    ProductListAPIView, ProductDetailAPIView,
    CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView,
)
