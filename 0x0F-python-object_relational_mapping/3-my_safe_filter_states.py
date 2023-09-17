#!/usr/bin/python3
'''
a script that lists all states from the database hbtn_0e_0_usa
'''
import MySQLdb
from sys import argv


if __name__ == '__main__':
    conn = MySQLdb.connect(
            host='localhost',
            port=3306,
            user=argv[1],
            password=argv[2],
            db=argv[3]
            )
    cursor = conn.cursor()
    matc = argv[4]
    cursor.execute("""SELECT * FROM states
                      WHERE states.name LIKE %s
                      ORDER BY states.id""", (matc,))
    rows = cursor.fetchall()
    for r in rows:
        print(r)

    cursor.close()
    conn.close()
