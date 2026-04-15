from rest_framework import mixins
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer



class ProductListAPIView(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    GenericAPIView
):
    """
    GET  /products/  → self.list()   (ListModelMixin)
    POST /products/  → self.create() (CreateModelMixin)
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ProductDetailAPIView(
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    GenericAPIView
):
    """
    GET    /products/<id>/  → self.retrieve() (RetrieveModelMixin)
    PUT    /products/<id>/  → self.update()   (UpdateModelMixin)
    DELETE /products/<id>/  → self.destroy()  (DestroyModelMixin)
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # Говорим GenericAPIView, какой URL-параметр использовать как pk
    lookup_url_kwarg = 'product_id'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class CategoryListAPIView(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    GenericAPIView
):
    """
    GET  /categories/  → self.list()
    POST /categories/  → self.create()
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CategoryDetailAPIView(
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    GenericAPIView
):
    """
    GET    /categories/<id>/  → self.retrieve()
    PUT    /categories/<id>/  → self.update()
    DELETE /categories/<id>/  → self.destroy()
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        try:
            category = Category.objects.get(pk=category_id)
        except Category.DoesNotExist:
            return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)

        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
