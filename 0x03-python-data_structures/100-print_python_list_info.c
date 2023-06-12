#include <Python.h>

/**
 * print_python_list_info - Prints basic info about Python lists.
 * @p: A PyObject list.
 */
void print_python_list_info(PyObject *p)
{
	int size, alloc_, i;
	PyObject *_obj;

	size = Py_SIZE(p);
	alloc_ = ((PyListObject *)p)->allocated;

	printf("[*] Size of the Python List = %d\n", size);
	printf("[*] Allocated = %d\n", alloc_);

	for (i = 0; i < size; i++)
	{
		printf("Element %d: ", i);
		_obj = PyList_GetItem(p, i);
		printf("%s\n", Py_TYPE(_obj)->tp_name);
	}
}
