import MySQLdb

#=======================================================================================================================
import sys


class MySQldbCon:
    # ------------------------------------------------------------------------------------------------------------------

    @staticmethod
    def callSP(spName, spParameters=[], withColNames=False):
        try:
            connection = MySQLdb.connect(host="sl-us-south-1-portal.1.dblayer.com",
                                         user="admin",
                                         passwd="HNWPOESSBQGZLJOK",
                                         db="compose",
                                         port=17252)
            # create a cursor
            cur = connection.cursor()
            # execute the stored procedure passing in
            # search_string as a parameter
            cur.callproc(spName, spParameters)
            # grab the results
            results = cur.fetchall()
            if withColNames:
                colNames = [[]]
                for colName in cur.description:
                    colNames[0].append(colName[0])

                for row in results:
                    colNames.append(row)

                cur.close()
                return colNames
            else:
                cur.close()
                return results
        except MySQLdb.Error as e:
            print(e, file=sys.stderr)
            return "MySql connection failed"

    # ------------------------------------------------------------------------------------------------------------------

# ======================================================================================================================
